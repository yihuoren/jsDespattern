function loadImg(src){
    let promise = new promise(function(resolve,reject){
        let img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject('图片加载失败')
        }
        img.src = src
    });
    return promise
}
let src = '';
let result = loadImg(src)
result.then(function(img){
    alert(`width: ${img.width}`)
}).then(function(img){
    alert(`height: ${img.height}`)
}).catch(function(ex){
    alert(ex)
})