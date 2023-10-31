"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    eat(food) {
        console.log(`呼噜呼噜地吃${food}`);
    }
}
class Dog extends Animal {
    run(distance) {
        console.log(`死角爬行`, distance);
    }
}
const d1 = new Dog();
d1.eat('狗粮');
d1.run(500);
//# sourceMappingURL=14_%E6%8A%BD%E8%B1%A1%E7%B1%BB.js.map