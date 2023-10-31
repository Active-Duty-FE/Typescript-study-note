export {} // 确保跟其他实例没有冲突

let age = 18  // number
//age = 'name' == // 会报错，把 age 推断为 number 类型

let foo  // any

foo = 100
foo = true 