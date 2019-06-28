// 装饰类——mixin示例
// ...表示结构集合
function mixins(...list){
    return function(target){
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo(){
        alert('foo')
    }
}

@mixins(Foo)
class MyClass{}

let obj = new MyClass()
obj.Foo() //'foo'