// 构建者模式
function Student(){};
function StudentBuilder(){
    this.student = new Student();
    this.setName = function(name){
        this.student.name = name
    }
    this.setGender = function(gender){
        if(gender!='男' && gender!='女')
        throw '好玩不'
        this.student.gender = gender
    }
    this.setHairLength = function(hairLength){
        if(
            (this.student.gender == "男" && hairLength>1) ||
            (this.student.gender == "女" && hairLength>25)
        )throw '回去剪头发！'
        this.student.hairLength = hairLength
    }
    this.build = function(){
        return this.student;
    }
}
// 原型模式减少开销
// StudentBuilder.prototype.setName = function(name){
//     this.student.name = name
// }
// StudentBuilder.prototype.setGender = function(gender){
//     if(gender!='男' && gender!='女')
//     throw '好玩不'
//     this.student.gender = gender
// }
// StudentBuilder.prototype.setHairLength = function(hairLength){
//     if(
//         (this.student.gender == "男" && hairLength>1) ||
//         (this.student.gender == "女" && hairLength>25)
//     )throw '回去剪头发！'
//     this.student.hairLength = hairLength
// }
// StudentBuilder.prototype.build = function(){
//     return this.student;
// }

var builder = new StudentBuilder();
builder.setName('王虎虎');
builder.setGender('男');
builder.setHairLength(2);
var whh = builder.build();
console.log(whh)