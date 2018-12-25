import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  el:'#app',
  data () {
    return {
      isLoading: true
    }
  }
})

//unit test
import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor ({
    propsData: {
      icon:'setting'
    }
  })
  button.$mount('#test')
  let useElement = button.$el.querySelector('use')
  console.log(useElement)
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
  button.$el.remove()
  button.$destroy()
}
{

  const Constructor = Vue.extend(Button)
  const button = new Constructor ({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor ({
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
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor ({
    propsData: {
      icon: 'setting',
      iconposition:'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$el.remove()
  button.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const gButton = new Constructor ({
    propsData: {
      icon: 'setting',
      iconposition:'right'
    }
  })
  gButton.$mount()
  gButton.$on('click', function (){
    console.log(button)
  })
  let button = gButton.$el
  button.click()
}