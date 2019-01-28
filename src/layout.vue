<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsLayout',
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted () {
    console.log(this.$children)
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'VpartsSider') {
        this.layoutClass.hasSider =  true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
