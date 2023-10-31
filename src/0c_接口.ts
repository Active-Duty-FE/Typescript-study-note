(function(){
  type PersonType = {
    name: string,
    age: number
  }
  interface Person {
    name: string;
    age: number;
  }
  interface Person {
    gender: string;
  }
  const obj: Person = {
    name:'aaa',
    age: 12,
    gender: 'male'
  }
  const obj2: PersonType = {
    name: 'bbb',
    age: 13
  }
  interface myInter {
    name: string;
    sayHello():void;
  }
  class myInterObj implements myInter {
    name: 'aa';
    sayHello():void {
      console.log('myInterObj');
    }
  }
  const myInterObjInstance = new myInterObj()
  myInterObjInstance.sayHello()
})()