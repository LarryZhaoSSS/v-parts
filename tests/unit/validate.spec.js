import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validate'

describe('validate',()=>{
  it('存在',()=>{
    let validator = new Validator()
    expect(validator).to.exist
  })
  it('required true报错',()=>{
    let data = {
      email:''
    }
    let rules = [{
      key:'email',
      required: true
    }]
    let validator = new Validator()
   let errors =  validator.validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('required true 通过',()=>{
    let data = {
      email:0
    }
    let rules = [{
      key:'email',
      required: true
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 报错',()=>{
    let data = {
      email:'@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: /^.+@.+$/
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email.pattern).to.eq('邮箱格式不正确')
  })
  it('pattern 通过',()=>{
    let data = {
      email:'1@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: /^.+@.+$/
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern email 报错',()=>{
    let data = {
      email:'@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: 'email'
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email.pattern).to.eq('邮箱格式不正确')
  })
  it('pattern email 通过',()=>{
    let data = {
      email:'1@qq.com'
    }
    let rules = [{
      key:'email',
      pattern: 'email'
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern and required',()=>{
    let data = {
      email:''
    }
    let rules = [{
      key:'email',
      pattern: 'email',
      required: true
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('pattern & minLength',()=>{
    let data = {
      email:'1@3'
    }
    let rules = [{
      key:'email',
      pattern: 'email',
      minLength:4,
      required: true
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email.minLength).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('maxLength',()=>{
    let data = {
      email:'1@311111111'
    }
    let rules = [{
      key:'email',
      pattern: 'email',
      maxLength:6,
      required: true
    }]
    let validator = new Validator()
    let errors =  validator.validate(data, rules)
    expect(errors.email.maxLength).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('many keys', ()=>{
    let data = {
      email:'121312312312312'
    }
    let rules = [{key:'email',required: true,minLength:5, maxLength: 10,hasNumber: true}]
    let fn = () => {
      let validator = new Validator()
      let errors =  validator.validate(data, rules)
    }
    expect(fn).to.throw
  })
})

