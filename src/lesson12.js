// 只读
function readonly(target,name,descriptor){
    // descriptor属性描述对象(Object.defineProperty中会用到)，原来的值如下
    // {
    //     value:1,
    //     enumerable:false,
    //     configurable:true,
    //     writable:true
    // }
    descriptor.writable = false
    return descriptor
}

class Person{
    constructor(){
        this.frist = "A"
        this.last = "B"
    }
    @readonly
    name(){
        return `${this.frist}-${this.last}`
    }
}

let person = new Person()
person.name()
// 当我们更改name的时候会报错，因为我们为该方法加了只读装饰
person.name = function(){
    alert('100')
}