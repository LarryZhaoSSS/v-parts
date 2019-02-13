<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'VpartsTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  created () {
    // this.$emit('update:selected')
  },
  mounted () {
    if (this.$children.length === 0) {
      console.warn('tabs没有子组件,tabs子组件应该是tabs-head和tabs-body')
    }
    this.$children.forEach((vm)=>{
      if (vm.$options.name === 'VpartsTabsHead') {
        vm.$children.forEach((item)=>{
          if (item.$options.name === 'VpartsTabsItem' && item.name === this.selected) {
            // console.log(item.$el)
            // console.log('itemmm')
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>

