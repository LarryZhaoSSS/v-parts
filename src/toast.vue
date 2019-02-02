<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="closed" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'VpartsToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        callback: undefined
      })
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  created() {
    console.log(this.closeButton)
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    mylog () {
      console.log('this log my')
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 16px;
$toast-height: 40px;
$toast-bg: black;
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
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0 16px;
}
.closed {
  padding-left: 16px;
  cursor: pointer;
}
.line {
  height: 100%;
  border-left: 3px solid #666;
  margin-left: 16px;
}
</style>
