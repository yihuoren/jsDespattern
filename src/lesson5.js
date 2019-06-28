// 工厂模式
//应用场景
// jQuery——$('div')
// React.createElement
// vue异步组价
class Product{
    constructor(name){
        this.name =  name
    }
    init(){
        alert("init")
    }
    fn1(){

    }
    fn2(){

    }
}
class Creator{
    creater(name){
        return new Product(name)
    }
}
// 测试
let creator = new Creator()
let p = creator.creater("工厂模式")
p.init()