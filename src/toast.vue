<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsToast'
}
</script>
<style lang="scss" scoped>
$font-size: 16px;
$toast-height: 40px;
$toast-bg:black;
.toast {
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background:rgba(0,0,0,.75);
  box-shadow:  0 0 3 0 rgba(0,0,0,.5);
  border-radius: 4px;
  padding: 0 16px;
}
</style>
