
class Person {
  name = 'xixi';
  readonly age = 18;
  static gender = 'female';
  sayHello(){
    console.log('hello' + this.name);
    
  }
}
const P = new Person()
console.log(P.name, P.age, Person.gender);
Person.gender = 'male'
P.name = 'xixi'
// P.age = '18' 报错
console.log(P.name, P.age, Person.gender);
P.sayHello()
class Dog {
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
const D = new Dog('aa',1)
console.log(D);
