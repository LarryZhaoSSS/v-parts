<template>
  <div class="v-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VPartsNavItem',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    this.root.addItem(this)
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "var";
.v-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
}
.v-sub-nav .v-nav-item {
  &.selected {
    background: $grey;
    color: $color;
    &::after {
      display: none;
    }
  }
}
</style>
