<template>
  <div class="v-cascade-item" :style="{height}">
    <div class="left">
      <div class="label"
           v-for="item in items" @click="leftSelected = item" >
        {{item.name}}
        <span v-if="item.children">></span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <v-cascade-item :items="rightItems" :height="height"></v-cascade-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "VCascadeItem",
  props: {
    items: {
      type: Array
    },
    height:{
      type: String
    }
  },
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  },
  data() {
    return {
      leftSelected: null
    }
  }
};

</script>
<style lang="scss" scoped>
  @import "var";
  .v-cascade-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left{
    height: 100%;
    padding: .3em 0;
  }
  .right{
    height: 100%;
    border-left: 2px solid $border-color;
  
  }
  .label{
    padding: .3em .5em;
  }
}
</style>
