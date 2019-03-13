<template>
  <div class="page" style="position:relative;">
    <!-- <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
    -->
    <!-- <v-pager :hideIfOnePage="false" :totalPage="10" :currentPage.sync="currentPage"></v-pager> -->
    <v-nav :selected.sync="selected" multiple>
      <v-nav-item name="home">首页</v-nav-item>
      <v-nav-item name="about">关于</v-nav-item>
      <v-nav-item name="job">招聘</v-nav-item>
    </v-nav>
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
import VNav from './nav/nav'
import VNavItem from './nav/nav-item'
import VSubNav from './nav/sub-nav'
export default {
  name: "demo",
  components: {
    GButton,
    VPager,
    VNav,
    VNavItem,
    VSubNav

  },
  data() {
    return {
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)],
      isLoading: true,
      message: "hi",
      selectedTab: 'sports',
      selectedTabs: ['1', '2'],
      singleTabs: ['1'],
      currentPage: 1,
      selected: ['home']
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
