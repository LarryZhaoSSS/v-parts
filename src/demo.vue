<template>
  <div class="page" style="position:relative;">
    <!-- <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
     -->
     <v-pager :hideIfOnePage="false" :totalPage="10" :currentPage.sync="currentPage"></v-pager>
  </div>
</template>
<style>
.page {
  padding: 100px;
}
</style>
<script>
import GButton from './button/button'
import VPager from './pager'
export default {
  name: "demo",
  components: {
    GButton,
    VPager
  },
  data() {
    return {
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)],
      isLoading: true,
      message: "hi",
      selectedTab: 'sports',
      selectedTabs: ['1','2'],
      singleTabs:['1'],
      currentPage: 1
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: white;
}
</style>
<style scoped lang="scss">
</style>
