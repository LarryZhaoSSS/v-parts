<template>
  <div class="v-cascade">
    <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <v-cascade-item @update:selected="onUpdateSelected" :selected="selected" :items="source" class="popover" :height=" popoverHeight"></v-cascade-item>
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
      },
      popoverHeight:{
        type: String
      },
      selected: {
        type: Array,
        default: ()=> { return []}
      }
    },
    computed:{
    
    },
    data() {
      return {
        popoverVisible: false,
        level1Selected: null,
        level2Selected: null
      }
    },
    methods: {
      onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "var";
  .v-cascade {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute;
      display: flex;
      top: 100%;
      left:0;
      @extend .box-shadow;
      background: white;
      .label {
        white-space:nowrap;
      }
    }
  }
</style>
