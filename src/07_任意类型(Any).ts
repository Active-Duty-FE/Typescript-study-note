export {} // 确保跟其他实例没有冲突

function stringify (value: any){
  return JSON.stringify(value)
}
stringify(100)
stringify(true)

let foo: any = 'st'

foo = 100
foo = false

foo.bar() // 语法上不会报错

// 类型不安全，不能轻易使用，可是兼容之前版本的代码时可能用到