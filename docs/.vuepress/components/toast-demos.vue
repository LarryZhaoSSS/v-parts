<template>
  <div style="paddinv-top: 16px;">
    <h2>使用this.$toast即可使用</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <v-button @click="$toast('点击弹出提示')">上方弹出</v-button>
      <v-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</v-button>
      <v-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</v-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <p>设置关闭按钮</p>
    <div>
      <v-button @click="onClickButton">弹出可关闭</v-button>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentClose}}</code></pre>
    <p>
      <strong>可插入html</strong>
    </p>
    <div>
      <v-button @click="onClickHtml">支持html</v-button>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentHtml}}</code></pre>
  </div>
</template>
<style>
.v-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from '../../../src/plugin'
import vButton from '../../../src/button/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: { vButton },
  methods: {
    onClickButton() {
      this.$toast('你知道点我就可以关闭吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('用户已经点击')
          }
        }
      })
    },
    onClickHtml () {
      this.$toast('<strong style="color:red">可支持html哦</strong>', {
        closeButton: {
          text: '我知道了',
          callback (toast) {
            console.log('用户说知道了')
          }
        },
        enableHtml: true,
        position: 'top',
        autoClose: 1
      })
    }
  },
  data() {
    return {
      content: `
          <style>
            .v-toast {
              z-index: 300;
            }
          </style>
          <v-button @click="$toast('点击弹出提示')">上方弹出</v-button>
          <v-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</v-button>
          <v-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</v-button>
      `.replace(/^ {8}/gm, '').trim(),
      contentClose: `
        methods: {
          onClickButton() {
            this.$toast('你知道点我就可以关闭吗？', {
              closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('用户已经点击')
                }
              }
            })
          }
        }
      `,
      contentHtml: `
      onClickHtml () {
        this.$toast('<strong style="color:red">可支持html哦</strong>', {
          closeButton: {
            text: '我知道了',
            callback (toast) {
              console.log('用户说知道了')
            }
          },
          enableHtml: true,
          position: 'top',
          autoClose: 1
        })
      }
      `
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
