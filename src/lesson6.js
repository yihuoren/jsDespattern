// 单例模式
class SingleObject{
    login(){

    }
}
// 静态方法
SingleObject.getInstance = (function(){
    let instance
    // 闭包
    return function(){
        if(!instance){
            instance = new SingleObject()
        }
        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
// 单例模式，每次实例化出来的对象，都必须是强相等，必须是唯一的
console.log('obj1===obj2',obj1===obj2) //true

let obj3 = new SingleObject()
obj3.login()
console.log('obj1===obj3',obj1===obj3) //false