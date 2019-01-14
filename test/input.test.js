const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  
  describe('props', () => {
    const Constructor = Vue.extend(Input)
  let vm
  afterEach(() => {
    vm.$destroy()
  })
  it('接收VALUE', () => {
    const Constructor = Vue.extend(Input)
    vm = new Constructor({
      propsData: {
        value: '123444555'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.value).to.equal('123444555')
  // vm.$destroy()
  })
  it('接收 disabled', () => {
    const Constructor = Vue.extend(Input)
    vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.disabled).to.equal(true)
  // vm.$destroy()
  })
  it('接收 readonly', () => {
    const Constructor = Vue.extend(Input)
    vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.readOnly).to.equal(true)
  // vm.$destroy()
  })
  it('接收 error', () => {
    const Constructor = Vue.extend(Input)
    vm = new Constructor({
      propsData: {
        error: '写错了'
      }
    }).$mount()
    const useElement = vm.$el.querySelectorAll('use')
    expect(useElement[0].getAttribute('xlink:href')).to.equal('#i-error')
    const errorMessage = vm.$el.querySelector('.error-message')
    expect(errorMessage.innerText).to.equal('写错了')
  // vm.$destroy()
  })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('支持 change/focus/blur/input 事件', ()=>{
      ['change', 'focus', 'input', 'blur'].forEach((eventName)=>{
        vm = new Constructor({
        }).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        //触发input change事件
        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.called
      })
    })
  })
})


