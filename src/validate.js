export default function validate(data, rules) {
  let errors = {}
  rules.forEach((rule) => {
    let value = data[rule.key]
    if (rule.required) {
      if (value !== 0 && !value) {
        errors[rule.key] = {required: '必填'}
      }
    }
    if(rule.pattern) {
      if(rule.pattern.test(value)=== false){
        errors[rule.key] = {pattern:'邮箱格式不正确'}
      }
    }
  })
  return errors
}