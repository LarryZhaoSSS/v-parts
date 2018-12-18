<template>
      <button class="g-button" :class="{[`icon-${iconposition}`]:true}">
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <div class="content">
          <slot></slot>
        </div>
      </button>
</template>
<script>
export default {
  props: ['icon','iconposition']
}
</script>
<style lang="scss" scoped>
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
      }

</style>
