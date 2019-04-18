import Slides from '../../src/slider/slides'
import VSlidesItem from '../../src/slider/slides-item'
import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'

chai.use(sinonChai)
describe('slides.vue', () => {
  it('存在.', () => {
    expect(Slides).to.exist
  })
  it('接受 slide-items, 默认展示第一个', (done) => {
    Vue.component('VSlidesItem', VSlidesItem)
    const wrapper = mount(Slides, {
      propsData:{
        autoPlay: true
      },

      slots: {
        default: `<v-slides-item name="1">
                    <div class="box1">1</div>
                  </v-slides-item>
                  <v-slides-item name="2">
                    <div class="box2">2</div>
                  </v-slides-item>
                  <v-slides-item name="3">
                    <div class="box3">3</div>
                  </v-slides-item>`
      }
    })
    console.log('-----html-----')
    setTimeout(()=>{
      console.log(wrapper.find('.box1').element)
      expect(wrapper.find('.box1').element).to.exist
      done()
    },50)

  })
  it('点击第二个就展示第二个',(done)=>{
    Vue.component('VSlidesItem', VSlidesItem)
    const wrapper = mount(Slides, {
      propsData:{
        autoPlay: true
      },

      slots: {
        default: `<v-slides-item name="1">
                    <div class="box1">1</div>
                  </v-slides-item>
                  <v-slides-item name="2">
                    <div class="box2">2</div>
                  </v-slides-item>
                  <v-slides-item name="3">
                    <div class="box3">3</div>
                  </v-slides-item>`
      }
    })
    setTimeout(()=>{
      console.log(wrapper.html())
      wrapper.find('[data-index="1"]').trigger('click')
      // expect(wrapper.find('.box2').element).to.exist
      done()
    },50)
  })
})