import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validate from '../../src/validate'

describe('validate',()=>{
  it('存在',()=>{
    expect(validate).to.exist
  })
  it('test validate1',()=>{
    let data = {
      email:''
    }
    let rules = [{
      key:'email',
      required: true
    }]
   let errors =  validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('test validate number is 0',()=>{
    let data = {
      email:0
    }
    let rules = [{
      key:'email',
      required: true
    }]
    let errors =  validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('test regular expression',()=>{
    let data = {
      email:'@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: /^.+@.+$/
    }]
    let errors =  validate(data, rules)
    expect(errors.email.pattern).to.eq('邮箱格式不正确')
  })
  it('test regular email expression correct',()=>{
    let data = {
      email:'1@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: /^.+@.+$/
    }]
    let errors =  validate(data, rules)
    expect(errors.email).to.not.exist
  })
})