const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'setting',
        iconposition: 'right'
      }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()

    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
