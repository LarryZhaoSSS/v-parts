<template>
  <div style="margin-top: 50px;">
    <v-button>默认按钮</v-button>
    <v-button icon="setting">设置按钮</v-button>
    <v-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">加载状态</v-button>
    <v-button icon="setting" iconposition="right">图标右侧</v-button>
    <v-button disabled>不可点击</v-button>
    <div>
        <v-button-group style="margin-top: 50px;">
          <v-button icon="left" iconposition="left">上一步 </v-button>
          <v-button>更多</v-button>
          <v-button icon="right" iconposition="right">下一步</v-button>
        </v-button-group>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import VButton from '../../../src/button'
import VButtonGroup from '../../../src/button-group'
export default {
  components: {
    vButton: VButton,
    vButtonGroup: VButtonGroup
  },
  data() {
    return {
      isLoading: true,
      content: `
      <v-button>默认按钮</v-button>
      <v-button icon="setting">设置按钮</v-button>
      <v-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">加载状态</v-button>
      <v-button icon="setting" iconposition="right">图标右侧</v-button>
      <v-button disabled>不可点击</v-button>
      
      <v-button-group style="margin-top: 50px;">
          <v-button icon="left" iconposition="left">上一步 </v-button>
          <v-button>更多</v-button>
          <v-button icon="right" iconposition="right">下一步</v-button>
      </v-button-group>

      data () {
        return {
          isLoading: true
        }
      }
      `
    }
  }
}
</script>
