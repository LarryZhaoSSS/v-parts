<template>
  <div class="v-parts-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
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
      }
    },
    methods: {
      onClickUpload() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        input.addEventListener('change', () => {
          console.log(input.files[0])
          let file = input.files[0]
          input.remove()
          let formData = new FormData()
          formData.append(this.name, file)
          let xhr = new XMLHttpRequest()
          xhr.open(this.method, this.action)
          xhr.onload = () => {
            console.log(xhr.response)
          }
          xhr.send(formData)
        })
        input.click()
      }
    }
  }
</script>
<style scoped lang="scss">
  .v-parts-uploader {
    border: 1px solid red;
  }
</style>