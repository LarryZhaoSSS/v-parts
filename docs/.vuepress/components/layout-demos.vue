<template>
  <div>
    <p>基本布局</p>
    <v-layout style="color: white; margin-bottom:50px;">
      <v-header style="height: 50px; background:lightskyblue;">header</v-header>
      <v-content style="height: 100px; background:deepskyblue;">content</v-content>
      <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
    </v-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentBase}}</code></pre>
    <p>嵌套layout布局,侧边栏可关闭</p>
    <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <v-header style="height: 50px; background:lightskyblue;">header</v-header>
      <v-layout>
        <v-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</v-sider>
        <v-content class="vcontent" style="height: 100px; background:deepskyblue;">content</v-content>
      </v-layout>
      <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
    </v-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <p>侧边栏在左边布局</p>
    <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <v-sider style=" background:#ddd; width:200px; color: black;">sider</v-sider>
      <v-layout>
        <v-header style="height: 50px; background:lightskyblue;">header</v-header>
        <v-content style="height: 100px; background:deepskyblue;">content</v-content>
        <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
      </v-layout>
    </v-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentSider}}</code></pre>
  </div>
</template>
<script>
import vLayout from '../../../src/layout/layout'
import vHeader from '../../../src/layout/header'
import vSider from '../../../src/sider'
import vContent from '../../../src/layout/content'
import vFooter from '../../../src/layout/footer'
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

      `,
      contentBase: `
     <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <v-header style="height: 50px; background:lightskyblue;">header</v-header>
      <v-layout>
        <v-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</v-sider>
        <v-content class="vcontent" style="height: 100px; background:deepskyblue;">content</v-content>
      </v-layout>
      <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
    </v-layout>


      `,
      contentSider: `
      <v-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <v-sider style=" background:#ddd; width:200px; color: black;">sider</v-sider>
      <v-layout>
        <v-header style="height: 50px; background:lightskyblue;">header</v-header>
        <v-content style="height: 100px; background:deepskyblue;">content</v-content>
        <v-footer style="height: 50px; background:lightskyblue;">footer</v-footer>
      </v-layout>
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
> p {
  margin: 30px;
}
.vcontent {
  padding: 1px;
}
</style>
