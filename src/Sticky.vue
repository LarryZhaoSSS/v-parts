<template>
<div class="v-parts-sticky-wrapper" ref="wrapper" :style="{height}">
  <div class="v-parts-sticky" :class="classes" :style="{left,width,top:distance}">
    <slot></slot>

  </div>
</div>
</template>

<script>
export default {
  name: "VSticky",
  props:{
    distance:{
      type:Number,
      default:0
    }
  },
  computed:{
    classes(){
      return {
        sticky:this.sticky
      }
    }
  },
  data(){
    return {
      sticky:false,
      left:undefined,
      width:undefined,
      height:undefined,
      top:undefined
    }
  },
  watch:{

  },
  mounted() {
    let top = this.offsetTop()
    this.windowScrollHandler=()=>{
      console.log('scroll...')
      if(window.scrollY > top -  this.distance){
        console.log('scrolled to bottom')
        let {height,left,width} = this.$refs.wrapper.getBoundingClientRect()
        this.height = height + 'px'
        this.left = left + 'px'
        this.width = width + 'px'
        this.top = this.distance + 'px'
        this.sticky = true
      } else {
        console.log("not to bottom")
        this.height = undefined
        this.left = undefined
        this.width = undefined
        this.top = undefined
        this.sticky = false
      }
    },
    window.addEventListener('scroll',this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.windowScrollHandler)
  },
  methods:{
    offsetTop(){
      let {top} = this.$refs.wrapper.getBoundingClientRect()
      return  top+window.scrollY
    }
  }

}
</script>

<style lang="scss" scoped>
.v-parts-sticky{
  &.sticky{
    position: fixed;
  }
}
</style>
