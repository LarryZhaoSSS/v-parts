<template>
  <div class="collapse-item">
    <div class="title" @click="toogle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VpartsCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toogle() {
      if (this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit('update:selected', this.name)
      }
    },
    close() {
      this.open = false
    },
    show () {
      this.open = true
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      if (name !== this.name) {
        this.close()
      } else {
        this.show()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.collapse-item {
  $grey: #ddd;
  $border-radius: 4px;
  > .title {
    border: 1px solid grey;
    border-radius: $border-radius;
    margin-top: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
