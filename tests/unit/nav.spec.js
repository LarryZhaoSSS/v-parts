import Nav from '../../src/nav/nav'
import VNavItem from '../../src/nav/nav-item'
import VSubNav from '../../src/nav/sub-nav'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
chai.use(sinonChai)
describe('Nav.vue', () => {
  it('存在.', () => {
    expect(Nav).to.exist
  })
  it('支持selected属性', () => {
    Vue.component('v-nav-item', VNavItem)
    Vue.component('v-sub-nav',VSubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
        <v-nav-item name="home">
        首页
      </v-nav-item>
      <v-sub-nav name="about">
        <template slot="title">关于</template>
        <v-nav-item name="culture">企业文化</v-nav-item>
        <v-nav-item name="develop">开发团队</v-nav-item>
        <v-sub-nav name="contact">
          <template slot="title">联系方式</template>
           <v-nav-item name="wechat">微信</v-nav-item>
          <v-sub-nav name="phone">
            <template slot="title">手机</template>
            <v-nav-item name="yidong">移动</v-nav-item>
            <v-nav-item name="dianxin">电信</v-nav-item>
          </v-sub-nav>
        </v-sub-nav>
      </v-sub-nav>
      <v-nav-item name="job">招聘</v-nav-item>
        `
      }
    })
    setTimeout(()=>{
      expect(wrapper.find(`[data-name="home"].selected`).exists()).to.be.true
    })
  })
  it('触发update:selected事件',(done)=>{
    Vue.component('v-nav-item', VNavItem)
    Vue.component('v-sub-nav',VSubNav)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
        <v-nav-item name="home">
        首页
      </v-nav-item>
      <v-sub-nav name="about">
        <template slot="title">关于</template>
        <v-nav-item name="culture">企业文化</v-nav-item>
        <v-nav-item name="develop">开发团队</v-nav-item>
        <v-sub-nav name="contact">
          <template slot="title">联系方式</template>
           <v-nav-item name="wechat">微信</v-nav-item>
          <v-sub-nav name="phone">
            <template slot="title">手机</template>
            <v-nav-item name="yidong">移动</v-nav-item>
            <v-nav-item name="dianxin">电信</v-nav-item>
          </v-sub-nav>
        </v-sub-nav>
      </v-sub-nav>
      <v-nav-item name="job">招聘</v-nav-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(()=>{
      wrapper.find(`[data-name="develop"]`).trigger('click')
      setTimeout(()=>{
        expect(callback).to.have.been.calledWith('develop')
        done()
      })
    })
  })
})
