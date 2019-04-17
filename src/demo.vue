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
  
  </div>
</template>
<style>
  /*.page {*/
  /*  padding: 100px;*/
  /*}*/
  .slide-wrapper{
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
  import GButton from './button/button';
  import VPager from './pager';
  import VCascade from './cascade/cascade';
  import VSlides from './slider/slides'
  import VSlidesItem from './slider/slides-item'
  import db from './db'
  

  function ajax(parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          }else{
            node.isLeaf = true
          }
        })
        success(result)
      }, 1000)
    })
  }
  
  console.log(ajax())
  export default {
    name: 'demo',
    components: {
      GButton,
      VPager,
      VCascade,
      VSlides,
      VSlidesItem
    },
    data() {
      return {
        d: [],
        scope: [new Date(1958, 1), new Date(2118, 5)],
        isLoading: true,
        message: 'hi',
        selectedTab: 'sports',
        selectedTabs: ['1', '2'],
        singleTabs: ['1'],
        currentPage: 1,
        source:[],
        selectedSource: [],
        selectedSlide: undefined
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
    },
    created() {
      ajax(0).then(result=>{
        // console.log(result)
        this.source = result
      })
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
<style scoped lang="scss">
</style>
