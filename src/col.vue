<template>
  <div class="col" :style="colStyle" :class="colClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VpartsCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    },
    colClass() {
      let { span, offset } = this
      return [span && `col-${span}`,
      offset && `offset-${offset}`]
    }
  },
  data() {
    return {
      gutter: 0,

    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  background: grey;
  /* margin-left: 20px; */
  /* width: 50%; */
  border: 1px solid red;
  $class-prefix: col-;
  padding: 0 10px;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>