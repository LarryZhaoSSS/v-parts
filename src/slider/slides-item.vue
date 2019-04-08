<template>
  <transition name="slide">
    <div class="vparts-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'VPartsSlidesItem',
    props: {
      name: {
        type: String,
        required: true
      }
    
    },
    computed: {
      visible () {
        return this.selected === this.name
      }
    },
    data () {
      return {
        selected: undefined
      }
    },
    created () {
    
    }
  }
</script>
<style lang="scss" scoped>
  .slide-leave-active{
    position: absolute;
    top:0;
    left:0;
  }
  .slide-enter-active, .slide-leave-active{
    transition: all 1s;
  }
  .slide-enter{
    tansform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .vparts-slides-item{
  
  }
</style>