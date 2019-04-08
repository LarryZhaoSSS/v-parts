<template>
  <div class="vparts-slides">
    <div class="vparts-slides-window">
      <div class="vparts-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VParts-slides',
    props: {
      selected: {
        type: String
      }
    },
    mounted() {
      
      let first = this.$children[0]
      if (!this.selected) {
        this.selected = first.$options.name
      }
      this.$children.forEach((vm)=>{
        vm.selected = this.selected
      })
    }
  }
</script>

<style lang="scss" scoped>
  .vparts-slides{
    display: inline-block;
    border: 1px solid black;
    &-window{
    
    }
    &-wrapper{
      position: relative;
    }
  }
</style>