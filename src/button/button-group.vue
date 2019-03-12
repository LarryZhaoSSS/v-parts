<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        consle.warn(`g-button-group的子元素应该全是g-button,但你写的是${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: white;
$button-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $button-radius;
      border-bottom-left-radius: $button-radius;
    }
    &:last-child {
      border-top-right-radius: $button-radius;
      border-bottom-right-radius: $button-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
