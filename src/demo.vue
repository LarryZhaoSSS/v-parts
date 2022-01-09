<template>
  <div class="page" style="position:relative;">
    <!-- <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
    -->
    <!-- <v-pager :hideIfOnePage="false" :totalPage="10" :currentPage.sync="currentPage"></v-pager> -->

    <!--    <v-cascade @update:selected="updateSelected" :source.sync="source" :selected.sync="selectedSource" popover-height="200px"></v-cascade>-->
    <!--  -->
    <!--    <div style="padding: 20px;">-->
    <!--      <v-cascade :source.sync="source" popover-height="200px"-->
    <!--                  :selected.sync="selectedSource" :load-data="loadData"></v-cascade>-->
    <!--    </div>-->

    <v-slides class="slide-wrapper" :selected.sync="selectedSlide">
      <v-slides-item name="1">
        <div class="box">1</div>
      </v-slides-item>
      <v-slides-item name="2">
        <div class="box">2</div>
      </v-slides-item>
      <v-slides-item name="3">
        <div class="box">3</div>
      </v-slides-item>
    </v-slides>

    <div style="margin:20px">
      <v-table
        compact
        bordered
        expand-field="description"
        checkable
        :columns="columns"
        :data-source="dataSource"
        :selectedItems.sync="selectedTableItems"
        :order-by.sync="orderBy"
        :height="400"
        :loading="tableLoading"
        @update:orderBy="handleOrderBy"
      >
        <template slot-scope="record">
          <button>编辑</button>
          <button>查看</button>
        </template>
      </v-table>
    </div>
  </div>
</template>
<style>
/*.page {*/
/*  padding: 100px;*/
/*}*/
.slide-wrapper {
  margin: 40px;
}
.box {
  height: 200px;
  width: 100%;

  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
}
</style>
<script>
import GButton from "./button/button";
import VPager from "./pager";
import VCascade from "./cascade/cascade";
import VSlides from "./slider/slides";
import VSlidesItem from "./slider/slides-item";
import db from "./db";
import VTable from "./table";

function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 1000);
  });
}

console.log(ajax());
export default {
  name: "demo",
  components: {
    GButton,
    VPager,
    VCascade,
    VSlides,
    VSlidesItem,
    VTable
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
      source: [],
      selectedSource: [],
      selectedSlide: undefined,
      expandedIds: [],
      columns: [
        {
          text: "姓名",
          field: "name",
          width: 100
        },
        {
          text: "分数",
          field: "score",
          width:400
        }
      ],
      orderBy: {
        // name:'asc',
        score: "desc"
      },
      dataSource: [
        { id: 1, name: "frank", score: 100, description: "xxxxx" },
        { id: 2, name: "frank2", score: 95, description: "xxxxx" },
        { id: 3, name: "frank3", score: 90 },
        { id: 4, name: "frank4", score: 86 },
        { id: 5, name: "frank5", score: 84 },
        { id: 6, name: "frank6", score: 82 },
        { id: 41, name: "frank4", score: 86 },
        { id: 51, name: "frank5", score: 84 },
        { id: 61, name: "frank6", score: 82 },
        { id: 42, name: "frank4", score: 86 },
        { id: 52, name: "frank5", score: 84 },
        { id: 62, name: "frank6", score: 82 },
        { id: 43, name: "frank4", score: 86 },
        { id: 53, name: "frank5", score: 84 },
        { id: 63, name: "frank6", score: 82 },
        { id: 44, name: "frank4", score: 86 },
        { id: 54, name: "frank5", score: 84 },
        { id: 64, name: "frank6", score: 82 },
        { id: 45, name: "frank4", score: 86 },
        { id: 55, name: "frank5", score: 84 },
        { id: 65, name: "frank6", score: 82 },
        { id: 46, name: "frank4", score: 86 },
        { id: 56, name: "frank5", score: 84 },
        { id: 66, name: "frank6", score: 82 },
        { id: 47, name: "frank4", score: 86 },
        { id: 57, name: "frank5", score: 84 },
        { id: 67, name: "frank6", score: 82 },
        { id: 48, name: "frank4", score: 86 },
        { id: 58, name: "frank5", score: 84 },
        { id: 68, name: "frank6", score: 82 },
        { id: 49, name: "frank4", score: 86 },
        { id: 59, name: "frank5", score: 84 },
        { id: 69, name: "frank6", score: 82 }
      ],
      selectedTableItems: [],
      tableLoading: false
    };
  },
  methods: {
    // updateSelected () {
    //   if (this.selectedSource[0]) {
    //     ajax(this.selectedSource[0].id).then(result=>{
    //       console.log(result)
    //     })
    //   }
    //
    //   console.log(this.selectedSource)
    // },
    // loadData ({id}, updateSource) {
    //   ajax(id).then(result => {
    //     console.log(result)
    //     updateSource(result) // 回调:把别人传给我的函数调用一下
    //   })
    // },

    handleOrderBy() {
      this.tableLoading = true;
      setTimeout(() => {
        this.tableLoading = false;
      }, 300);
    }
  },
  created() {
    ajax(0).then(result => {
      // console.log(result)
      this.source = result;
    });
    // setTimeout(()=>{
    //   this.selectedSlide = '2'
    // },2000)
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
