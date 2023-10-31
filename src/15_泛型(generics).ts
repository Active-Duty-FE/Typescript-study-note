export {} // 确保跟其他实例没有冲突

function createArray<T> (length: number, value:T): T[]{
  return Array<T>(length).fill(value)
}
createArray(2,'foo')
createArray(2,111)