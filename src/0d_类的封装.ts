
(function(){
  // js 写法
  class Person {
    /*private name: string;
    private age: number;
    constructor(name: string, age:number){
      this.name = name;
      this.age = age;
    }*/
    constructor(private name:string, private age: number){}
    setAge(value:number){
      if(value > 0){
        this.age = value
      }
    }
    getAge(){
      return this.age
    }
    setName(value: string){
      this.name = value;
    }
    getName(){
      return this.name;
    }
  }
  const per = new Person('xixi',4)
  per.setAge(8)
  console.log(per);
  // ts 写法
  class Animal {
    private _name: string;
    constructor(name: string){
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(value: string){
      this._name = value
    }
  }
  const Ani = new Animal('xiwang')
  Ani.name = 'easy'
  console.log(Ani.name);
})()