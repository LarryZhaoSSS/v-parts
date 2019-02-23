<template>
  <div>
    <h3>默认点击触发</h3>
    <v-popover position="bottom">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现下方</v-button>
    </v-popover>

    <v-popover position="top">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现上方</v-button>
    </v-popover>

    <v-popover position="left">
      <template slot="content" slot-scope="{close}">
        <div>popover content
          <div>
            <a href="http://qq.com">qq官网</a>
          </div>
          <v-button @click="close">点我关闭</v-button>
        </div>
      </template>
      <v-button>出现左侧,支持html</v-button>
    </v-popover>

    <v-popover position="right">
      <template slot="content">
        <div>popover content</div>
      </template>
      <v-button>出现右侧</v-button>
    </v-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentClick}}</code></pre>
    <h3>hover触发</h3>
    <v-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现下方</v-button>
    </v-popover>

    <v-popover position="top" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现上方</v-button>
    </v-popover>

    <v-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现左方</v-button>
    </v-popover>

    <v-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover content</div>
      </template>
      <v-button>出现右方</v-button>
    </v-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentHover}}</code></pre>
  </div>
</template>
<script>
import vButton from '../../../src/button'
import vPopover from '../../../src/popover'
export default {
  components: {
    vButton,
    vPopover
  },
  data() {
    return {
      contentClick: `
    <v-popover position="bottom">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现下方</v-button>
    </v-popover>

    <v-popover position="top">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现上方</v-button>
    </v-popover>

    <v-popover position="left">
      <template slot="content" slot-scope="{close}">
        <div>popover content
          <div>
            <a href="http://qq.com">qq官网</a>
          </div>
          <v-button @click="close">点我关闭</v-button>
        </div>
      </template>
      <v-button>出现左侧,支持html</v-button>
    </v-popover>

    <v-popover position="right">
      <template slot="content">
        <div>popover content</div>
      </template>
      <v-button>出现右侧</v-button>
    </v-popover>
    `,
    contentHover: `
    <v-popover position="bottom" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现下方</v-button>
    </v-popover>

    <v-popover position="top" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现上方</v-button>
    </v-popover>

    <v-popover position="left" trigger="hover">
      <template slot="content">
        <div>popover</div>
      </template>
      <v-button>出现左方</v-button>
    </v-popover>

    <v-popover position="right" trigger="hover">
      <template slot="content">
        <div>popover content</div>
      </template>
      <v-button>出现右方</v-button>
    </v-popover>
    `
    }

  }
}
</script>
<style lang="scss" scoped>
</style>
