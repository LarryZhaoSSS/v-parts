const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position', done => {
    Vue.component('g-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <g-popover  position="bottom" ref="a">
            <template slot="content" slot-scope="{close}">
              <div>popover content
                  <div>
                    <a href="http://qq.com">qqq</a>
                  </div>
                  <button @click="close">点我关闭</button>
              </div>
            </template>
              <button>click left</button> 
          </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        console.log(vm.$refs.a.$refs.contentWrapper)
        expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })
})
