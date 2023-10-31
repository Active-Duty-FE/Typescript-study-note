(function () {
    // js 写法
    class Person {
        /*private name: string;
        private age: number;
        constructor(name: string, age:number){
          this.name = name;
          this.age = age;
        }*/
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        setAge(value) {
            if (value > 0) {
                this.age = value;
            }
        }
        getAge() {
            return this.age;
        }
        setName(value) {
            this.name = value;
        }
        getName() {
            return this.name;
        }
    }
    const per = new Person('xixi', 4);
    per.setAge(8);
    console.log(per);
    // ts 写法
    class Animal {
        constructor(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const Ani = new Animal('xiwang');
    Ani.name = 'easy';
    console.log(Ani.name);
})();
//# sourceMappingURL=0d_%E7%B1%BB%E7%9A%84%E5%B0%81%E8%A3%85.js.map