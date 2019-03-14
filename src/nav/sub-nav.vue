<template>
  <div class="v-sub-nav" :class="{active}" v-click="close">
    <span class="v-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="v-sub-nav-icon" :class="{open}">
        <v-icon name="right"></v-icon>
      </span>
    </span>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="v-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import click from '../click-outside.js'
import VIcon from '../icon'
export default {
  directives: { click },
  name: 'VPartsSubNav',
  components: {
    VIcon
  },
  inject: ['root', 'vertical'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    beforeEnter(el) {
      // el.style.height = 0
    },
    enter(el, done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transitionend', ()=>{
        done()
      })
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend',()=>{
        done()
      })
    },
    afterLeave(el) {
      el.style.height = 'auto'
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {

      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "var";

.v-sub-nav {
  position: relative;
  &.active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
  .v-sub-nav-label {
    padding: 10px 20px;
    display: block;
  }
  &-icon {
    display: none;
  }
  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    color: $light-color;
    font-size: $font-size;
    min-width: 8em;
    &.vertical {
      position: static;
      border-radius: none;
      border: none;
      box-shadow: none;
      transition: height .3s;
      overflow: hidden;
    }
  }
}
.v-sub-nav .v-sub-nav {
  .v-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  &.active {
    &::after {
      display: none;
    }
  }
  .v-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .v-sub-nav-icon {
    display: inline-flex;
    margin-left: 1em;
    svg {
      fill: $light-color;
    }
    transition: transform 0.3s;
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>

