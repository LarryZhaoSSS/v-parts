<template>
  <div class="v-cascade-item">
    <div class="left">
      <div class="label"
           v-for="item in items" @click="leftSelected = item" >
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <v-cascade-item :items="rightItems"></v-cascade-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "VCascadeItem",
  props: {
    items: {
      type: Array
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
.v-cascade-item {
  border: 1px solid red;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left{
    border: 1px solid blue;
  }
  .right{
    margin-top: -1px;
  }
  .label{
    white-space: nowrap;
  }
}
</style>
