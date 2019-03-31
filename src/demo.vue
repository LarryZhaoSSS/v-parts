<template>
  <div class="page" style="position:relative;">
    <!-- <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
    -->
    <!-- <v-pager :hideIfOnePage="false" :totalPage="10" :currentPage.sync="currentPage"></v-pager> -->
    <p>111</p>
    <v-cascade :source="source" popover-height="200px"></v-cascade>
    <p>222</p>
  </div>
</template>
<style>
.page {
  padding: 100px;
}
</style>
<script>
import GButton from "./button/button";
import VPager from "./pager";
import VCascade from "./cascade/cascade";
export default {
  name: "demo",
  components: {
    GButton,
    VPager,
    VCascade
  },
  data() {
    return {
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)],
      isLoading: true,
      message: "hi",
      selectedTab: "sports",
      selectedTabs: ["1", "2"],
      singleTabs: ["1"],
      currentPage: 1,
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "西湖区" }, { name: "下沙" }]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "南湖"
                },
                {
                  name: "秀洲"
                }
              ]
            }
          ]
        },
        {
          name: "江苏",
          children: [
            {
              name: "苏州",
              children: [{ name: "工业园区", name: "相城区" }]
            },
            {
              name: "南京",
              children: [
                {
                  name: "玄武"
                }
              ]
            }
          ]
        }
      ]
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
