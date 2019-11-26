<template>
  <div class="v-parts-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <template slot="tips"></template>
    <ol class="v-parts-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          <g-icon class="v-parts-uploader-spin" name="loading"></g-icon>
        </template>
        <template v-else-if="file.type.indexOf('image')===0">
          <img :src="file.url" class="v-parts-uploader-image" width="32" height="32" alt="">
        
        </template>
        <template v-else>
          <div class="v-parts-uploader-defaultImage">
          </div>
        </template>
        
        <span class="v-parts-uploader-name" :class="{[file.status]:file.status}"> {{ file.name }}</span>
        <button class="v-parts-uploader-remove" @click="onRemoveFile(file)">X</button>
      </li>
    </ol>
    <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
  </div>
</template>
<script>
  import GIcon from './icon'

  export default {
    name: 'VPartsUploader',
    components: {
      GIcon
    },
    props: {
      name: {
        type: String,
        required: true
      },
      method: {
        type: String,
        default: 'POST'
      },
      action: {
        type: String,
        required: true
      },
      parseResponse: {
        type: Function,
        required: true
      },
      fileList: {
        type: Array,
        default: () => []
      }

    },
    data() {
      return {
        url: 'about:blank'
      }
    },
    methods: {
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', () => {
          let file = input.files[0]
          this.uploadFile(file)
          input.remove()

        })
        input.click()
      },
      onRemoveFile(file) {
        let answer = window.confirm('你确定要删除这个文件')
        if (answer) {
          let copy = [...this.fileList]
          let index = copy.indexOf(file)
          copy.splice(index, 1)
          this.$emit('update:fileList', copy)
        }
      },
      createInput() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      },
      beforeUploadFile(rawFile, newName) {
        let {type, size} = rawFile
        console.log(this.fileList)
        this.$emit('update:fileList', [...this.fileList, {name: newName, type, size, status: 'uploading'}])

      },
      afterUploadFile(newName, url) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        console.log(this.fileList)
        console.log(file)
        let copy = JSON.parse(JSON.stringify(file))
        copy.url = url
        copy.status = 'success'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, copy)
        console.log('---update:fileList---')
        console.log(this.fileList)
        this.$emit('update:fileList', fileListCopy)
      },
      uploadFile(rawFile) {
        let {name, size, type} = rawFile
        let newName = this.generateName(name)
        this.beforeUploadFile(rawFile, newName)
        let formData = new FormData()
        formData.append(this.name, rawFile)
        this.postRequest(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url
          this.afterUploadFile(newName, url)
        }, () => {
          this.uploadError(newName)
        })
      },
      uploadError(newName) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      generateName(name) {
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let prefix = name.substring(0, dotIndex)
          let suffix = name.substring(dotIndex)
          name = prefix + '(1)' + suffix
        }
        return name
      },

      postRequest(formData, success, fail) {

        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          success(xhr.response)
        }
        xhr.send(formData)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "var";
  
  .v-parts-uploader {
    
    &-fileList {
      list-style: none;
      
      > li {
        display: flex;
        align-items: center;
        margin: 8px 0;
        border: 1px solid darken($grey, 10%);
      }
    }
    
    &-defaultImage {
      margin-right: 8px;
      height: 32px;
      width: 32px;
    }
    
    &-image {
      margin-right: 8px;
    }
    
    &-name {
      margin-right: auto;
      
      &.success {
        color: green;
      }
      
      &.fail {
        color: red;
      }
    }
    
    &-remove {
      width: 32px;
      height: 32px;
    }
    
    &-spin {
      width: 32px;
      height: 32px;
      animation: spin 0.2s infinite linear;
    }
  }
</style>