<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  created () {
    console.log('sunzi')
    console.log(this.eventBus)
    this.eventBus.$on('update:selected', (name)=>{
      console.log(name)
    })
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

