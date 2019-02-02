import Vue from "vue"
import Button from "./button"
import ButtonGroup from "./button-group"
import Icon from "./icon"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Content from "./content"
import Sider from "./sider"
import Footer from "./footer"
import Toast from './toast'
import plugin from './plugin'
Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-layout", Layout)
Vue.component("g-header", Header)
Vue.component("g-sider", Sider)
Vue.component("g-content", Content)
Vue.component("g-footer", Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
new Vue({
  el: "#app",
  data() {
    return {
      isLoading: true,
      message: "hi",
    }
  },
  created() {
    // setTimeout(() => {
    //   let event = new Event("change")
    //   let inputElement = this.$el.querySelector("input")
    //   inputElement.dispatchEvent(event)
    // }, 3000)
    
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    showToast () {
      this.$toast('laiba toast', {
        closeButton: {
          text: '知道了哦',
          callback (toast) {
            console.log('用户说知道了')
            toast.mylog()
          }
        }
      })
    }
  },
})

// unit test
