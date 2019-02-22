<template>
  <div>
    <v-layout style="color: white; margin-bottom:50px;">
      <v-header style="height: 50px; background:lightskyblue;">header</v-header>
      <v-content style="height: 100px; background:deepskyblue;">content</v-content>
      <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
    </v-layout>
    <p>嵌套layout布局,侧边栏可关闭</p>
    <v-layout>
      <v-header>header</v-header>
      <v-layout>
        <v-sider class="sider-bar">sider</v-sider>
        <v-content>content</v-content>
      </v-layout>
      <v-footer>footer</v-footer>
    </v-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import vLayout from '../../../src/layout'
import vHeader from '../../../src/header'
import vSider from '../../../src/sider'
import vContent from '../../../src/content'
import vFooter from '../../../src/footer'
export default {
  components: {
    vLayout,
    vHeader,
    vSider,
    vFooter,
    vContent
  },
  data() {
    return {
      content: `
      <v-layout>
        <v-header>header</v-header>
        <v-layout>
          <v-sider class="sider-bar">sider</v-sider>
          <v-content>content</v-content>
        </v-layout>
        <v-footer>footer</v-footer>
      </v-layout>
      
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.sider-bar {
  width: 150px;
}
</style>
