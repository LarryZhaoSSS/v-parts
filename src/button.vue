<template>
      <button class="g-button" :class="{[`icon-${iconposition}`]:true}"
      @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="g-loading icon" v-if="loading" name="loading"></g-icon>
        <div class="g-content">
          <slot></slot>
        </div>
      </button>
</template>
<script>
import Vue from 'vue'
import Icon from './icon'
export default {
  components: {
    'g-icon': Icon
  },
  props: {
    icon:{},
    loading: {
      type: Boolean,
      default: false
    },
    iconposition:{
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: white;
$button-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.g-button{
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        font:inherit;
        border-radius: $button-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
         &:hover{
        border-color: $border-color-hover;
      }
      &:hover{
        background-color: $button-active-bg;
      }
      &:focus{
        outline: none;
      }
      >.g-content{
        order:2;
      }
      >.icon {
        order:1;
        margin-right: .1em;
        }
      &.icon-right {
        > .icon{
          order:2;
          margin-left: .1em;
          margin-right:0;
        }
        >.g-content{
          order:1;
        }
      }
      .g-loading {
        animation: spin 2s infinite linear;
      }
  }

</style>
