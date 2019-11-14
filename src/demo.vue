<template>
  <div class="page" style="position:relative;">
    <v-uploader accept="image/*"
                action="https://sss-image-server.herokuapp.com/upload"
                method="POST"
                name="file"
                :fielList.sync="fileList">
      
      <button>上传</button>
      <template slot="tips">
        <div>只能上传300kg内的png. jpeg文件</div>
      </template>
    </v-uploader>
  
  
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
  import GButton from './button/button';
  import VPager from './pager';
  import VCascade from './cascade/cascade';
  import VSlides from './slider/slides'
  import VSlidesItem from './slider/slides-item'
  import VUploader from './uploader'
  import db from './db'


  function ajax(parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node => {
          if (db.filter(item => item.parent_id === node.id).length > 0) {
            node.isLeaf = false
          } else {
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
      VSlidesItem,
      VUploader
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
        source: [],
        selectedSource: [],
        selectedSlide: undefined,
        fileList: []
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
      ajax(0).then(result => {
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
