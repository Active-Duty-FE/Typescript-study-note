export {} // 确保跟其他实例没有冲突
 function fn(a: number, b: string, c:number = 0, ...rest: number[]){
   return `何为${a}+${b}`
 }
 fn(1,'a')

 const fn2: (a:number, b: number) => string = function(a: number, b: number):string {
   return `何为${a}+${b}`
 }