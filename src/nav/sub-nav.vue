<template>
  <div class="v-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="v-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VPartsSubNav'
}
</script>
<style lang="scss" scoped>
.v-sub-nav {
  position: relative;
  padding: 10px 20px;
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
</style>

