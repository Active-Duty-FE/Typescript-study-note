(function(){
  class Animal {
    name:string;
    age:number;
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
    sayHello(){
      console.log(this.name + '在叫');
    }
  }
  class Dog extends Animal {
    run(){
      console.log(this.name + '在跑');
      
    }
  }
  class Cat extends Animal {
      sayHello(): void {
        console.log('喵喵喵');
        
      }
  }
  const D = new Dog('旺财',4)
  const C = new Cat('招财猫',4)
  D.sayHello();
  D.run();
  C.sayHello();
  type a = 'aa' | number
  let b: a = 12
  enum Weekday {'Monday','Tuesday','Wednesday','Thursday','Friday'}
  console.log(Weekday['Monday'] === 0);
  console.log(Weekday[1]);
})()