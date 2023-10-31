export {} // 确保跟其他实例没有冲突

const nums = [1, 2, 5, 110]

const res = nums.find(i => i > 0)

const square = res * res

// 断言
const num1 = res as number
const num2 = <number>res // 与 jsx 下不能使用