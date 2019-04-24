class Validator {
  constructor() {
  }
  static add (name, fn) {
    Validator.prototype[name] = fn
  }
  validate(data, rules) {
    let errors = {}
    rules.forEach((rule) => {
      let value = data[rule.key]
      if (rule.required) {
        let error = this.required(value)
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key].required = error
          return
        }
      }
      // 遍历validators并逐一调用对应函数
      let validators = Object.keys(rule).filter(key => key !== 'key' || key !== 'required')
      validators.forEach((ValidatorLey) => {
        //  key is minLength/maxLength/hasNumber
        if (this[ValidatorLey]) {
          let error = this[ValidatorLey](value, rule[ValidatorLey])
          if (error) {
            ensureObject(errors, rule.key)
            errors[rule.key][ValidatorLey] = error
          }
        }

      })
    })
    return errors
  }
  required (value) {
    if (value !== 0 && !value) {
      return '必填'
    }
  }
  pattern (value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '邮箱格式不正确'
    }
  }
  minLength  (value, minLength)  {
    if (value.length < minLength) {
      return '太短'
    }
  }
  maxLength (value, maxLength) {
    if (value.length > maxLength) {
      return '太长'
    }
  }
}
function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}
export default Validator
// export default function validate(data, rules) {
//   let errors = {}
//   rules.forEach((rule) => {
//     let value = data[rule.key]
//     if (rule.required) {
//       let error = validate.required(value)
//       if (error) {
//         ensureObject(errors, rule.key)
//         errors[rule.key].required = error
//         return
//       }
//       // if (value !== 0 && !value) {
//       //   errors[rule.key] = {required: '必填'}
//       //   return
//       // }
//     }
//     // 遍历validators并逐一调用对应函数
//     let validators = Object.keys(rule).filter(key => key !== 'key' || key !== 'required')
//     validators.forEach((ValidatorLey) => {
//       //  key is minLength/maxLength/hasNumber
//       if (validate[ValidatorLey]) {
//         let error = validate[ValidatorLey](value, rule[ValidatorLey])
//         if (error) {
//           ensureObject(errors, rule.key)
//           errors[rule.key][ValidatorLey] = error
//         }
//       }
//
//     })
//   })
//   return errors
// }
// validate.required = (value) => {
//   if (value !== 0 && !value) {
//     return '必填'
//   }
// }
// validate.pattern = (value, pattern) => {
//   if (pattern === 'email') {
//     pattern = /^.+@.+$/
//   }
//   if (pattern.test(value) === false) {
//     return '邮箱格式不正确'
//   }
// }
// validate.minLength = (value, minLength) => {
//   if (value.length < minLength) {
//     return '太短'
//   }
// }
// validate.maxLength = (value, maxLength) => {
//   if (value.length > maxLength) {
//     return '太长'
//   }
// }
//
// function ensureObject(obj, key) {
//   if (typeof obj[key] !== 'object') {
//     obj[key] = {}
//   }
// }