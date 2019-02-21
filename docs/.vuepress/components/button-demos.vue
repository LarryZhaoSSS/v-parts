<template>
  <div>
    <v-button>默认按钮</v-button>
    <v-button icon="setting">设置按钮</v-button>
    <v-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">加载状态</v-button>
    <v-button icon="setting" iconposition="right">图标右侧</v-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import VButton from '../../../src/button'
export default {
  components: {
    vButton: VButton
  },
  data() {
    return {
      isLoading: true,
      content: `
      <v-button>默认按钮</v-button>
      <v-button icon="setting">设置按钮</v-button>
      <v-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">加载状态</v-button>
      <v-button icon="setting" iconposition="right">图标右侧</v-button>

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
