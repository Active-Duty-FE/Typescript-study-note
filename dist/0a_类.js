class Person {
    constructor() {
        this.name = 'xixi';
        this.age = 18;
    }
    sayHello() {
        console.log('hello' + this.name);
    }
}
Person.gender = 'female';
const P = new Person();
console.log(P.name, P.age, Person.gender);
Person.gender = 'male';
P.name = 'xixi';
// P.age = '18' 报错
console.log(P.name, P.age, Person.gender);
P.sayHello();
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const D = new Dog('aa', 1);
console.log(D);
//# sourceMappingURL=0a_%E7%B1%BB.js.map