export {} // 确保跟其他实例没有冲突
const hello = (name: string) => {
  console.log(`hellow ${name}`);
}
hello('123')
