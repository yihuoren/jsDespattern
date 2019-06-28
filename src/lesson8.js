// 适配器模式经典实例
// 封装的ajax
ajax({
    url:"",
    type:"",
    dataType:"",
    data:{}
})
.done(function(){})

// 由于历史原因，页面中充斥着如下代码
$.ajax({})

// 做一层适配器
var $ = {
    ajax: function(options){
        return ajax(options);
    }
}
