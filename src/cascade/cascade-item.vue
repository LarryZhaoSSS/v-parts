<template>
  <div class="v-cascader-item">
    {{sourceItem.children}}
    {{sourceItem.name}}
    <!-- <v-cascader-item
      v-for="(item,index) in sourceItem"
      :souceItem="item"
      :key="item+index"
    ></v-cascader-item> -->
  </div>
</template>
<script>
export default {
  name: "VCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};

</script>
<style lang="scss" scoped>
.v-cascader-item {
  border: 1px solid red;
}
</style>
