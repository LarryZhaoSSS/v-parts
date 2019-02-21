<template>
  <div style="margin-top: 50px;">
    <div class="box">
      <v-input value="不可点击" disabled></v-input>
      <v-input value="绑定值" v-model="message" @change="inputChange"></v-input>
      <v-input value="只读" readonly></v-input>
    </div>
    <div class="box">
      <v-input value="错误提示" error="不得少于5个子"></v-input>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import vInput from '../../../src/input'
export default {
  components: {
    vInput
  },
  data() {
    return {
      message: '绑定',
      content: `
      <v-input value="不可点击" disabled></v-input>
      <v-input value="绑定值" v-model="message" @change="inputChange"></v-input>
      <v-input value="只读" readonly></v-input>
      <v-input value="错误提示" error="不得少于5个子"></v-input>
       
       
       
       data () {
        return {
          message: '绑定'
        }
      }
      `
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin: 20px;
}
</style>
