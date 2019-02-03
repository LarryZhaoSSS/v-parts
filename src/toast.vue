<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="closed" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VpartsToast',
  computed: {
    toastClasses () {
      return {[`position-${this.position}`]: true}
    }
  },
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
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyles()
  },
  created() {
    console.log(this.closeButton)
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        let toastHeight = this.$refs.toast.getBoundingClientRect().height
        this.$refs.line.style.height = `${toastHeight}px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    mylog() {
      console.log('this log my')
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 16px;
$toast-min-height: 40px;
$toast-bg: black;
$animation-duration: 0.3s;
@keyframes slide-up {
  0%{opacity: 0; transform: translateY(100%);}
  100%{opacity: 1;transform: translateY(0%);}
}
@keyframes slide-down {
  0%{opacity: 0; transform: translateY(-100%);}
  100%{opacity: 1;transform: translateY(0%);}
}
@keyframes fade-in {
  0%{opacity: 0; }
  100%{opacity: 1;}
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  color: #fff;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 0px 16px;
  flex-shrink: 0;
  .message{
    padding: 8px 0;
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
}
</style>
