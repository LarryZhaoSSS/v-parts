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
    methods: {
      updateSlideItem() {
        let first = this.$children[0]
        let selected = this.selected || first.name
        this.$children.forEach((vm) => {
          vm.selected = selected
        })
      }
    },
    mounted() {
      this.updateSlideItem()
    },
    updated() {
      this.updateSlideItem()
    }
  }
</script>

<style lang="scss" scoped>
  .vparts-slides {
    display: inline-block;
    border: 1px solid black;
    
    &-window {
    
    }
    
    &-wrapper {
      position: relative;
    }
  }
</style>