import Vue from "vue"
import Button from "./button/button"
import ButtonGroup from "./button/button-group"
import Icon from "./icon"
import Input from "./input"
import Row from "./grid/row"
import Col from "./grid/col"
import Layout from "./layout/layout"
import Header from "./layout/header"
import Content from "./layout/content"
import Sider from "./sider"
import Footer from "./layout/footer"
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'
import TabsItem from './tabs/tabs-item'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Popover from './popover'
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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-popover', Popover)
Vue.use(plugin)
new Vue({
  el: "#app",
  data() {
    return {
      isLoading: true,
      message: "hi",
      selectedTab: 'sports',
      selectedTabs: ['1','2'],
      singleTabs:['1']
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
      this.$toast('<strong>laiba toast</strong>', {
        closeButton: {
          text: '我知道了',
          callback (toast) {
            console.log('用户说知道了')
            toast.mylog()
          }
        },
        enableHtml: true,
        position: 'top',
        autoClose: 1
      })
    }
  },
})

// unit test
