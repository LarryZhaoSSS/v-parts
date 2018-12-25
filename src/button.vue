<template>
      <button class="g-button" :class="{[`icon-${iconposition}`]:true}"
      @click="$emit('click')">
        <!-- <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg> -->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
          <slot></slot>
        </div>
      </button>
</template>
<script>
export default {
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
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.g-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        font:inherit;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
         &:hover{
        border-color: var(--border-color-hover);
      }
      &:hover{
        background-color: var(--button-active-bg);
      }
      &:focus{
        outline: none;
      }
      >.content{
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
        >.content{
          order:1;
        }
      }
      .loading {
        animation: spin 2s infinite linear;
      }
  }

</style>
