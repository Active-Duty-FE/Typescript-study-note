export {} // 确保跟其他实例没有冲突

class Person {
  name: string
  age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  sayHi (msg: string):void {
    console.log(`我是${this.name},年龄${this.age}`);
  }
}


