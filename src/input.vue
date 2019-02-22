<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.2);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > * {
    margin-right: 0.5em;
    &:last-child {
      margin-right: 0;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inside 0 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    border: none;
    > input {
      border-color: #f1453d;
    }
  }
  .icon-error {
    fill: red;
  }
  .error-message {
    color: $red;
  }
}
</style>