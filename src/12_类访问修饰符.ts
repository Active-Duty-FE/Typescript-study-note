export {} // 确保跟其他实例没有冲突

class Person {
  public name: string
  protected age: number
  private readonly gender: string // 只读属性
  constructor(name: string, age: number,gender: string){
    this.name = name
    this.age = age
    this.gender = gender
  }
}
const P1 = new Person('xixi',7,'女')
console.log(P1.name);
// console.log(P1.age);  // 访问不到
// console.log(P1.gender);  // 访问不到

class Student extends Person {
  constructor(name: string, age: number, gender: string){
    super(name, age, gender)
    console.log(this.age); // 可以访问 protected
  }
}

const S1 = new Student('xixi1',7,'女')
console.log(S1.name);
// console.log(S1.age); // 访问不到
// console.log(S1.gender); // 访问不到

class GoodStudent extends Person{
  private constructor(name: string, age: number, gender: string){
    super(name, age, gender)
    console.log(this.age); // 可以访问 protected
  }
  static create (name: string,age: number,gender: string) {
    return new GoodStudent(name, age, gender)
  }
}
// const GP1 = new GoodStudent() // 无法实例化
const GP1 = GoodStudent.create('xixi2',7,'女')