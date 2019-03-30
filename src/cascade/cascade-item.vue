<template>
  <div class="v-cascade-item">
    {{sourceItem.children}}
    {{sourceItem.name}}
    <v-cascade-item
    v-for="item in sourceItem.children"
    v-if="sourceItem.children"
    :sourceItem="item"
    >

    </v-cascade-item>
  </div>
</template>
<script>
export default {
  name: "VCascadeItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};

</script>
<style lang="scss" scoped>
.v-cascade-item {
  border: 1px solid red;
}
</style>
