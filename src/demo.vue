<template>
  <div class="page" style="position:relative;">
    <!-- <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
    -->
    <!-- <v-pager :hideIfOnePage="false" :totalPage="10" :currentPage.sync="currentPage"></v-pager> -->
    <v-nav :selected.sync="selected">
      <v-nav-item name="home">首页</v-nav-item>
      <v-sub-nav name="about">
        <template slot="title">关于</template>
        <v-nav-item name="culture">企业文化</v-nav-item>
        <v-nav-item name="develop">开发团队</v-nav-item>
        <v-sub-nav name="contact">
          <template slot="title">联系方式</template>
           <v-nav-item name="wechat">微信</v-nav-item>
          <v-sub-nav name="phone">
            <template slot="title">手机</template>
            <v-nav-item name="yidong">移动</v-nav-item>
            <v-nav-item name="dianxin">电信</v-nav-item>
          </v-sub-nav>
        </v-sub-nav>
      </v-sub-nav>
      <v-nav-item name="job">招聘</v-nav-item>
    </v-nav>
      <!-- <v-nav :selected.sync="selected" vertical style="width: 200px;margin:20px;">
      <v-nav-item name="home">首页</v-nav-item>
      <v-sub-nav name="about">
        <template slot="title">关于</template>
        <v-nav-item name="culture">企业文化</v-nav-item>
        <v-nav-item name="develop">开发团队</v-nav-item>
        <v-sub-nav name="contact">
          <template slot="title">联系方式</template>
           <v-nav-item name="wechat">微信</v-nav-item>
          <v-sub-nav name="phone">
            <template slot="title">手机</template>
            <v-nav-item name="yidong">移动</v-nav-item>
            <v-nav-item name="dianxin">电信</v-nav-item>
          </v-sub-nav>
        </v-sub-nav>
      </v-sub-nav>
      <v-nav-item name="job">招聘</v-nav-item>
    </v-nav> -->
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
      selected: ['home', 'culture']
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
