// 三要素——————封装，我们需要构建支持TS的项目
// 父类
class People{
    name 
    age
    // protected weight //定义protected属性,对自己及子类开放
    constructor(name,age){
        this.name = name
        this.age = age
        this.weight = 120
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
    number
    // private girlfriend //定义private属性,对自己开放
    constructor(name,age,number){
        super(name,age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study(){
        alert(`${this.number} study`)
    }
    getWeight(){
        alert(`${this.weight}`)
    }
}

let xiaoming = new Student("xiaoming",10,"A")
xiaoming.getWeight()
// xiaoming.weight //编译报错，因为weight属性，只对自己及子类内部开发
// xiaoming.girlfriend //编译报错，因为girlfriend是私有属性，只对自己内部开发
