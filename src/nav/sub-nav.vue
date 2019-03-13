<template>
  <div class="v-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="v-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VPartsSubNav',
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
.v-sub-nav {
  position: relative;
  > span {
     padding: 10px 20px;
     display: block;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
.v-sub-nav .v-sub-nav .v-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>

