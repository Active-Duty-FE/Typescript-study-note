(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(this.name + '在叫');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(this.name + '在跑');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const D = new Dog('旺财', 4);
    const C = new Cat('招财猫', 4);
    D.sayHello();
    D.run();
    C.sayHello();
    let b = 12;
    let Weekday;
    (function (Weekday) {
        Weekday[Weekday["Monday"] = 0] = "Monday";
        Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
        Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
        Weekday[Weekday["Thursday"] = 3] = "Thursday";
        Weekday[Weekday["Friday"] = 4] = "Friday";
    })(Weekday || (Weekday = {}));
    console.log(Weekday['Monday'] === 0);
    console.log(Weekday[1]);
})();
//# sourceMappingURL=0b_%E7%BB%A7%E6%89%BF.js.map