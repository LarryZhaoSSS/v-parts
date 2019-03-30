<template>
  <div class="v-cascade">
    <div class="trigger"></div>
    <div class="popover"></div>
  </div>
</template>
<script>
import VCascaderItem from "./cascade-item";
export default {
  name: "VCascade",
  components: {
    VCascaderItem
  },
  props: {
    source: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.v-cascade {
  .trigger{
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popover{
    border: 1px solid green;
    height: 100px;
    width: 100px;
  }
}
</style>
