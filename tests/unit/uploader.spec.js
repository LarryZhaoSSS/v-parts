import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'

chai.use(sinonChai)
import Uploader from '../../src/uploader'
import http from '../../src/http'
describe('uploader.vue', () => {
  it('uploader存在.', () => {
    expect(Uploader).to.exist
  })
  it('可以上传一个文件', () => {
    http.post = (url,options)=>{
     // setTimeout(()=>{
     //   options.success(`{"id":"123"}`)
     //
     // },100)
      console.log('aaaaa')
    }
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: 'http://localhost:3000/upload',
        method:'post',
        parseResponse: () => {
        },


      },
      slots:{
        default:`<button id="x">click</button>`
      }
    })
    console.log(wrapper.html())
    wrapper.find('#x').trigger('click')
    console.log(wrapper.html())
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'],'xxx.txt');
    let file2 = new File(['yyy'],'yyy.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    data.items.add(file2)
    input.files = data.files
  })
})