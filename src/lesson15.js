// 构建者模式-es6
let studentCount = 0;
class Student{};
class StudentBuilder{
    constructor(){
        this.student = new Student();
    }
    setName(name){
        this.student.name = name
    }
    setGender(gender){
        if(gender!='男' && gender!='女')
        throw '好玩不'
        this.student.gender = gender
    }
    setHairLength(hairLength){
        if(
            (this.student.gender == "男" && hairLength>1) ||
            (this.student.gender == "女" && hairLength>25)
        )throw '回去剪头发！'
        this.student.hairLength = hairLength
    }
    build(){
        studentCount++;
        return this.student;
    }
}
let builder = new StudentBuilder();
builder.setName('王虎虎');
builder.setGender('男');
builder.setHairLength(2);
let whh = builder.build();
console.log(whh)