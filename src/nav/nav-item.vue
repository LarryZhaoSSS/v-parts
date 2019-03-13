<template>
  <div class="v-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VPartsNavItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    onClick () {
      this.$emit('add:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-nav-item{
  padding: 10px 20px;
  &.selected{
    background: yellowgreen;
  }
}
</style>
