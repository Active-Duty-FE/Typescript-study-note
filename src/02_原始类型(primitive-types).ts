export {} // 确保跟其他实例没有冲突
const a: string = 'foobar'

const b: number = 100  // 包括 NAN Infinity

const c: boolean = true  // false
// 以上三种类型可以定义为 空, null, undefined  === 关闭严格模式（非严格模式） strictNullChecks:true ==> 单独检查 `null` 和 `undefined`
const d: string = null

const e: void = undefined // null 严格模式下，只能是 undefined

const f: null = null

const g: undefined = undefined

const h: symbol = Symbol()

let i: {name: string, obj?: number, torf: boolean}
i = {
  name: 'xixi',
  torf: true
}
let j: {name: string, [propName: string]: any}
j = {
  name: 'xixi',
  car: 11
}
let k: (a: number, b: string, [propsName]: any) => string;
k = function (a:1, b:'1', c: 'a'){
  return a + b + c
}
enum Gender {
  male,
  female
}
let l: {name: string, gender: Gender }
l = {
  name: 'xixi',
  gender: Gender.female
}