<template>
  <div>
    <h3>打开指定项</h3>
    <v-collapse :selected.sync="selectedTabs">
      <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
      <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
      <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
    </v-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentSelected}}</code></pre>
    <h3>只能打开单项</h3>
    <v-collapse :single="true" :selected.sync="singleTab">
      <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
      <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
      <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
    </v-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentSingle}}</code></pre>
  </div>
</template>
<script>
import vCollapse from '../../../src/collapse'
import vCollapseItem from '../../../src/collapse-item'
export default {
  components: {
    vCollapse,
    vCollapseItem
  },
  data() {
    return {
      selectedTabs: ['1', '2'],
      singleTab: ['1'],
      contentSelected: `
       <v-collapse :selected.sync="selectedTabs">
        <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
        <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
        <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
       </v-collapse>
       data () {
         return {
            selectedTabs: ['1', '2']
         }
       }
       `,
       contentSingle: `
       <v-collapse :single="true" :selected.sync="singleTab">
        <v-collapse-item title="标题1" name="1">内容1</v-collapse-item>
        <v-collapse-item title="标题2" name="2">内容2</v-collapse-item>
        <v-collapse-item title="标题3" name="3">内容3</v-collapse-item>
       </v-collapse>
       data () {
         return {
            singleTabs: ['1']
         }
       }
       `
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
