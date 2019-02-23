<template>
  <div>
    <p>24格布局</p>
    <v-row class="demoRow">
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
    </v-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentBase}}</code></pre>

    <p>可设置gutter</p>

    <v-row class="demoRow" gutter="10">
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
    </v-row>
    <v-row class="demoRow" gutter="10">
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
    </v-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentGutter}}</code></pre>
    <p>设置空隙</p>
    <v-row class="demoRow" gutter="10">
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8" offset="8">
        <div class="demoCol">8</div>
      </v-col>
    </v-row>
    <v-row class="demoRow" gutter="10">
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4" offset="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4" offset="8">
        <div class="demoCol">4</div>
      </v-col>
    </v-row>
     <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{contentOffset}}</code></pre>
  </div>
</template>
<script>
import vRow from '../../../src/row'
import vCol from '../../../src/col'
export default {
  components: {
    vRow,
    vCol
  },
  data() {
    return {
      contentBase: `
      <v-row class="demoRow">
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
    </v-row>

    <v-row class="demoRow">
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
      <v-col span="2">
        <div class="demoCol">2</div>
      </v-col>
    </v-row>
      `,
      contentGutter: `
      <v-row class="demoRow" gutter="10">
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
      <v-col span="6">
        <div class="demoCol">6</div>
      </v-col>
    </v-row>
    <v-row class="demoRow" gutter="10">
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
      <v-col span="8">
        <div class="demoCol">8</div>
      </v-col>
    </v-row>
      
      `,
      contentOffset: `
       <v-row class="demoRow" gutter="10">
        <v-col span="8">
          <div class="demoCol">8</div>
          </v-col>
        <v-col span="8" offset="8">
          <div class="demoCol">8</div>
        </v-col>
      </v-row>
    <v-row class="demoRow" gutter="10">
      <v-col span="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4" offset="4">
        <div class="demoCol">4</div>
      </v-col>
      <v-col span="4" offset="8">
        <div class="demoCol">4</div>
      </v-col>
    </v-row>
      `
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

> p {
  margin: 30px;
}
.demoRow {
  margin: 20px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid deeppink;
  background: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

