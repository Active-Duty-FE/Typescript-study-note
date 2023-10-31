export {} // 确保跟其他实例没有冲突
const arr1: Array<number> = [1,2,3]
const arr2: number[] = [4,5,6]

function sum(...args: Array<number>){
  return args.reduce((pre, cur) => pre + cur)
}
console.log(sum(1, 2, 8));
