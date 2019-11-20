<template>
  <div class="v-parts-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <img :src="file.url" width="100" height="100" alt="">
        {{ file.name }}
        <button @click="onRemoveFile(file)">X</button>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'VPartsUploader',
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
      parseResponse:{
        type:Function,
        required:true
      },
      fileList:{
        type: Array,
        default:()=>[]
      }
      
    },
    data() {
      return {
        url:'about:blank'
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
        if(answer) {
          let copy = [...this.fileList]
          let index = copy.indexOf(file)
          copy.splice(index,1)
          this.$emit('update:fileList',copy)
        }
      },
      createInput() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      },
      uploadFile(file) {
        let formData = new FormData()
        formData.append(this.name, file)
        let {name, size, type} = file
        this.postRequest(formData,(response)=>{
          let url = this.parseResponse(response)
          this.url = url
          while(this.fileList.filter(f=>f.name===name).length>0) {
            let dotIndex = name.lastIndexOf('.')
            let prefix = name.substring(0,dotIndex)
            let suffix = name.substring(dotIndex)
            name = prefix + '(1)' +suffix
          }
          this.$emit('update:fileList',[...this.fileList,{name,type,size,url}])
        })
      },
      postRequest(formData,success) {
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = ()=>{
          success(xhr.response)
        }
        xhr.send(formData)
      }
    }
  }
</script>
<style scoped lang="scss">
  .v-parts-uploader {
    border: 1px solid red;
  }
</style>