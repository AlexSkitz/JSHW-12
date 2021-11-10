
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static getType = ()=>console.log('Человек');
    getName = ()=>console.log(this.name);
    getAge = ()=>console.log(this.age);
}

class Programmer extends Human{
    constructor(name, age){
        super(name, age);
        this.job = "Programmer";
    }
    static getJob = ()=>console.log("Programmer");
}

class Tester extends Human{
    constructor(name, age){
        super(name, age);
        this.job = "Tester";
    }
    static getJob = ()=>console.log("Tester");
}

class ITCompany {
    constructor(){
        this.create = (name, age, job)=>{
            switch(job){
                case 'Programmer':
                    return new Programmer(name, age);
                case 'Tester':
                    return new Tester(name, age);
                default:
                    return console.log("Найми сотрудников - хватит работать одному!")
            }
        }
    }
}

let A_level = new ITCompany();
let junior = A_level.create("Dima",20,"Programmer");
let middle = A_level.create("Anton",25,"Tester");

console.log(junior);
console.log(middle);



const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5'
}
let notTransformLetters = (obj)=>{
    const keysLetter = ['a','e','i','o','u'];
    for(let keys in obj){
      if(keysLetter.includes(keys)){
        Object.defineProperty(obj,keys,{writable : false});
      }
    }
}

notTransformLetters(obj);
obj.a = "transform";
obj.b = "transform";
obj.c = "transform";
obj.e = "transform";
obj.o = "transform";
console.log(obj);