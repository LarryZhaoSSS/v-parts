const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.ok
  })
  it ('接收gutter属性', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
    const vm = new Vue({
      el: div
    })
    // console.log(vm.$el.outerHTML)
    setTimeout(()=>{
      // console.log(vm.$el.outerHTML)
      const cols = vm.$el.querySelectorAll('.col')
      // console.log(cols)
      // console.log('------')
      const row = vm.$el.querySelectorAll('.row')
      // console.log(row[0])
      expect(getComputedStyle(row[0]).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row[0]).marginRight).to.eq('-10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      // console.log('页面mounted结束')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 1200)
   
  })
  it ('接收align属性', ()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('center')
    div.remove()
    vm.$destroy()
  })
  
})
