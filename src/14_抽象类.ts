export {} // 确保跟其他实例没有冲突

abstract class Animal {
  eat (food: string):void{
    console.log(`呼噜呼噜地吃${food}`);
  }
  abstract run (distance: number):void
}
class Dog extends Animal {
  run(distance: number): void {
    console.log(`死角爬行`,distance);
  }
}
const d1 = new Dog()
d1.eat('狗粮')
d1.run(500)