<template>
  <div class="vparts-pager" :class="{hide: hideIfOnePage=== true && totalPage <= 1}">
    <span
      class="vparts-pager-nav prev"
      :class="{disabled: currentPage === 1}"
      @click="onClickPage(currentPage-1)"
    >
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
        <v-icon class="vparts-pager-item separator" name="shenglve" :key="page+index"></v-icon>
      </template>
      <template v-else>
        <span class="vparts-pager-item other" :key="page+index" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="vparts-pager-nav next" @click="onClickPage(currentPage+1)">
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
  computed: {
    pages() { // 依赖了 totalPage 和 currentPage
      return unique([1, this.totalPage,
        this.currentPage,
        this.currentPage - 1, this.currentPage - 2,
        this.currentPage + 1, this.currentPage + 2]
        .filter((n) => n >= 1 && n <= this.totalPage)
        .sort((a, b) => a - b))
        .reduce((prev, current, index, array) => {
          prev.push(current)
          array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
          return prev
        }, [])
    }
  },
  
  methods: {
    onClickPage(n) {
      if (n>=1 && n<= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  $width: 20px;
  $height: 20px;
  $font-size: 12px;
  &.hide {
    display: none;
  }
  &-separator {
    width: $width;
    font-size: $font-size;
  }
  &-item {
    min-width: $width;
    height: $height;
    font-size: $font-size;
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current,
    &:hover {
      border-color: $blue;
    }
    &.current {
      cursor: default;
    }
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    font-size: $font-size;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>
