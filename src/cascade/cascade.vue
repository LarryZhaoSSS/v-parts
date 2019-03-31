<template>
  <div class="v-cascade">
    <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <v-cascade-item :items="source"></v-cascade-item>
    </div>
  </div>
</template>
<script>
  import VCascadeItem from './cascade-item'

  export default {
    name: 'VCascade',
    components: {
      VCascadeItem
    },
    props: {
      source: {
        type: Array
      }
    },
    computed:{
      level2Items(){
        if(this.level1Selected){
          return this.level1Selected.children
        } else {
          return []
        }
      },
      level3Items(){
        if(this.level2Selected){
          return this.level2Selected.children
        } else {
          return []
        }
      }
    },
    data() {
      return {
        popoverVisible: false,
        level1Selected: null,
        level2Selected: null
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "var";
  
  .v-cascade {
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover {
      border: 1px solid green;
      height: 100px;
      display: flex;
      
    }
  }
</style>
