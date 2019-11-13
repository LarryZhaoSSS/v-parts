<template>
  <div class="v-parts-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp"></div>
  </div>
</template>
<script>
 export default {
   name:'VPartsUploader',
   methods:{
     onClickUpload() {
      let input = document.createElement('input')
       input.type = 'file'
       this.$refs.temp.appendChild(input)
       input.addEventListener('change',()=>{
         console.log(input.files[0])
       })
       input.click()
     }
   }
 }
</script>
<style scoped lang="scss">
  .v-parts-uploader {
    border:1px solid red;
  }
</style>