export default function validate(data, rules) {
  let errors = {}
  rules.forEach((rule) => {
    let value = data[rule.key]
    if (rule.required) {
      let error = validate.required(value)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].required = error
        return
      }
      // if (value !== 0 && !value) {
      //   errors[rule.key] = {required: '必填'}
      //   return
      // }
    }
    if (rule.pattern) {
      let error = validate.pattern(value, rule.pattern)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].pattern = error
      }
      // if (rule.pattern === 'email') {
      //   rule.pattern = /^.+@.+$/
      // }
      // if (rule.pattern.test(value) === false) {
      //   ensureObject(errors, rule.key)
      //   errors[rule.key].pattern = '邮箱格式不正确'
      // }
    }
    if (rule.minLength) {
      if (value.length < rule.minLength) {
        ensureObject(errors, rule.key)
        errors[rule.key].minLength = '邮箱太短'
      }
    }
  })
  return errors
}
validate.required = (value) => {
  if (value !== 0 && !value) {
    return '必填'
  }
}
validate.pattern = (value, pattern) => {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return '邮箱格式不正确'
  }
}
validate.minLength = (value, minLength) => {
  if (value.length < minLength) {
    return '邮箱太短'
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}