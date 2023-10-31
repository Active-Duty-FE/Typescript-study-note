export {} // 确保跟其他实例没有冲突
interface Eat {
  eat(food: string):void
}
interface Run {
  run(distance: number):void
}
class Person implements Eat,Run {
  eat(food:string):void {
    console.log(`人吃了${food}`);
  }
  run(distance: number):void {
    console.log(`人跑了${distance}公里`);
    
  }
}
class Dog implements Eat,Run {
  eat(food:string):void {
    console.log(`狗狗吃了${food}`);
  }
  run(distance: number):void {
    console.log(`狗狗跑了${distance}公里`);
    
  }
}