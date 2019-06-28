// 三要素————继承
// 父类
class People{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`My name is ${this.name},age ${this.age}`)
    }
}
// 子类
class Student extends People{
    constructor(name,age,number){
        super(name,age)
        this.number = number
    }
    study(){
        alert(`${this.number} study`)
    }
}

let xiaoming = new Student("小明",10,'A')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()