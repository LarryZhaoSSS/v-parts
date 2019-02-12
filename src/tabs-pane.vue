<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
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
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
  &.active {
    /* background: red; */
  }
}
</style>

