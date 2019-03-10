<template>
  <div class="vparts-pager">
    <!-- <span v-for="(page, index) in pages" :key="page+index"
    class = "vparts-pager-item" :class="{active: page === currentPage, separator: page === '...'}"
    >
      {{page}}
    </span>-->
    <span class="vparts-pager-nav prev" :class="{disabled: currentPage === 1}">
      <v-icon name="left"></v-icon>
    </span>
    <template
      v-for="(page,index) in pages"
      class="vparts-pager-item"
      :class="{active: page === currentPage, separator: page === '...'}"
    >
      <template v-if="page === currentPage">
        <span class="vparts-pager-item current" :key="page+index">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <!-- <span class="vparts-pager-item separator" :key="page+index">?</span>
         -->
         <v-icon class="vparts-pager-item separator" name="shenglve"></v-icon>
      </template>
      <template v-else>
        <span class="vparts-pager-item other" :key="page+index">{{page}}</span>
      </template>
    </template>
    <span class="vparts-pager-nav next">
      <v-icon name="right"></v-icon>
    </span>
  </div>
</template>
<script>
import VIcon from './icon.vue'
export default {
  name: 'VPartsPager',
  components: {
    VIcon
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let pages = [1, this.totalPage, this.currentPage,
      this.currentPage - 1, this.currentPage - 2,
      this.currentPage + 1, this.currentPage + 2]
    let p = unique(pages.sort((a, b) => a - b))
    let p2 = p.reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
      return prev
    }, [])
    return {
      pages: p2
    }
  }
}
function unique(array) {
  return [...new Set(array)]
}
</script>
<style lang="scss" scoped>
$border-color-hover: #666;
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$button-active-bg: #eee;
$button-bg: white;
$button-height: 32px;
$color: #333;
$light-color: #666;
$font-size: 14px;
$small-font-size: 12px;
$input-height: 32px;
$red: #f1453d;
$grey: #eee;
$blue: #4a90e2;
.vparts-pager {
  $width: 20px;
  $height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-seperator{
    width: 20px;
    font-size: 14px;
    border: 1px solid red;
  }
  &-item {
    border: 1px solid $grey;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    min-width: $width;
    min-height: $height;
    height: $height;
    margin: 0 4px;
    cursor: pointer;
    &.active,
    &:hover {
      border-color: $blue;
    }
    &.active {
      cursor: default;
    }
    &.separator {
      border: none;
      cursor: default;
    }
  }
  &-nav{
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    &.disabled{
      svg{
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>
