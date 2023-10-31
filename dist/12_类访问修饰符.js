"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const P1 = new Person('xixi', 7, '女');
console.log(P1.name);
// console.log(P1.age);  // 访问不到
// console.log(P1.gender);  // 访问不到
class Student extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        console.log(this.age); // 可以访问 protected
    }
}
const S1 = new Student('xixi1', 7, '女');
console.log(S1.name);
// console.log(S1.age); // 访问不到
// console.log(S1.gender); // 访问不到
class GoodStudent extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        console.log(this.age); // 可以访问 protected
    }
    static create(name, age, gender) {
        return new GoodStudent(name, age, gender);
    }
}
// const GP1 = new GoodStudent() // 无法实例化
const GP1 = GoodStudent.create('xixi2', 7, '女');
//# sourceMappingURL=12_%E7%B1%BB%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6.js.map