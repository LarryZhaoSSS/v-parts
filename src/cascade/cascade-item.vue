<template>
  <div class="v-cascade-item" :style="{height}">
    <div>
      {{selected&&selected[level]&&selected[level].name}}
      {{level}}
    </div>
    <div class="left">
      <div class="label"
           v-for="item in items" @click="onClickLabel(item)" >
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <v-cascade-item :selected="selected" :level="level+1" ref="right" :items="rightItems" :height="height"></v-cascade-item>
    </div>
  </div>
</template>
<script>
  import Icon from '../icon'
export default {
  name: "VCascadeItem",
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height:{
      type: String
    },
    selected: {
      type: Array,
      default: ()=> { return []}
    },
    level: {
      type: Number,
      default: 0
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
  },
  methods: {
    onClickLabel (item) {
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      this.$emit('update:selected', copy)
    }
  },
  mounted() {
  
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
    border-left: 2px solid $border-color-light;
  
  }
  .label{
    padding: .3em .5em;
    display: flex;
    align-items: center;
    .icon{
      margin-left: 1em;
      transform: scale(0.75);
    }
  }
}
</style>
