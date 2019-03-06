<template>
  <div class="page" style="position:relative;">
    <g-button>默认按钮</g-button>
    <g-button icon="setting">love js</g-button>
    <g-button icon="setting" :loading="isLoading" @click="isLoading = !isLoading">js love</g-button>
  </div>
</template>
<style>
.page {
  padding: 100px;
}
</style>
<script>
import GButton from './button'
export default {
  name: "demo",
  components: {
    GButton
  },
  data() {
    return {
      d: [],
      scope: [new Date(1958, 1), new Date(2118, 5)]
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: white;
}
</style>
<style scoped lang="scss">
</style>