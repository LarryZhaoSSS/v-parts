<template>
  <div class="v-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VPartsNav',
  provide() {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    }
  },
  methods: {
    updateChildren() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name)
        })
      })
    },
    addItem(vm) {
      this.items.push(vm)
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  }
}
</script>
<style lang="scss" scoped>
@import "var";
.v-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  color: $color;
  cursor: default;
  user-select: none;
  &.vertical {
    flex-direction: column;
    border: 1px solid $grey;
  }
}
</style>
