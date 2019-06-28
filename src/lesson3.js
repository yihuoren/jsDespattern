// 三要素——————多态
class People{
    constructor(name){
        this.name = name
    }
    saySomething(){
        
    }
}
class A extends People{
    constructor(name){
        super(name)
    }
    saySomething(){
        alert('I am A')
    }
}
class B extends People{
    constructor(name){
        super(name)
    }
    saySomething(){
        alert('I am B')
    }
}

let A = new A('a')
A.saySomething()
let B = new B('b')
B.saySomething()