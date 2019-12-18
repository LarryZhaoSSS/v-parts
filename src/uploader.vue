<template>
  <div class="v-parts-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <template slot="tips"></template>
    <ol class="v-parts-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading' ">
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
  import http from './http'
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
      },
      sizeLimit:{type:Number}

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
          
          this.uploadFiles(input.files)
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
        this.$refs.temp.innerHTML = ''
        let input = document.createElement('input')
        input.accept = "image/*"
        input.type = 'file'
        input.multiple = true
        this.$refs.temp.appendChild(input)
        return input
      },
      beforeUploadFile(rawFiles, newNames) {
        rawFiles = Array.from(rawFiles)
        for (let i = 0; i < rawFiles.length; i++) {
          let {size, type} = rawFiles[i]
          if (size > this.sizeLimit * 1024 * 1024) {
            this.$emit('error', '文件大于2MB')
            return false
          }
        }
        let x = rawFiles.map((rawFile, i) => {
          let {type, size} = rawFile
          return {name: newNames[i], type, size, status: 'uploading'}
        })
        this.$emit('update:fileList', [...this.fileList, ...x])
        return true

      },
      afterUploadFiles(newName, url) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let copy = JSON.parse(JSON.stringify(file))
        copy.url = url
        copy.status = 'success'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, copy)
        this.$emit('update:fileList', fileListCopy)
      },
      uploadFiles(rawFiles) {
        

        let newNames = []
        for (let i = 0; i < rawFiles.length; i++) {
          let rawFile = rawFiles[i]
          let {name, size, type} = rawFile
          newNames[i] = this.generateName(name)
        }
        if (!this.beforeUploadFile(rawFiles, newNames)) {return}
        for (let i = 0; i < rawFiles.length; i++) {
          let rawFile = rawFiles[i]
          let newName = newNames[i]
          let formData = new FormData()
          formData.append(this.name, rawFile)
          this.postRequest(formData, (response) => {
            let url = this.parseResponse(response)
            this.url = url
            this.afterUploadFiles(newName, url)
          }, xhr => {
            this.uploadError(xhr, newName)
          })
        }
        
      },
      uploadError(xhr, newName) {
        let file = this.fileList.filter(f => f.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
        let error = ''
        if (xhr.status === 0) {
          error = '网络无法连接'
        }
        this.$emit('error',error)
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
        http[this.method.toLowerCase()](this.action, {success, fail, data: formData})
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
      @include spin;
    }
  }
</style>