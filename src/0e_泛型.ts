function fn<T>(a: T): T {
  return a
}
console.log(fn<string>('aa'))
console.log(fn(10));

interface Inter {
  length: number;
}
function fn2<T extends Inter>(a: T): number {
  return a.length
}
console.log(fn2(['a','b']))
console.log(fn2('fewew'))