<template>
  <div class="vparts-pager">
    <span v-for="(page, index) in pages" :key="page+index">
      {{page}}
    </span>
  </div>
</template>
<script>
export default {
  name:'VPartsPager',
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
  data () {
    let pages = []
    for (let i=1 ;i < this.totalPage; i++) {
      pages.push(i)
    }
    return {
      pages
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
