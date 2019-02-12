<template>
  <div class="tabs-head">
    <slot name="actions"></slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsTabsHead',
  inject: ['eventBus'],
  created () {
    console.log('ye ye gei')
    console.log(this.eventBus)
  }
}
</script>
<style lang="scss" scoped>

</style>

