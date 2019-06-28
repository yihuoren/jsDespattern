// 讲解设计原理实例
// 车辆
class Car{
    constructor(num){
        this.num =num //车牌号
    }
}
// 摄像头
class Camera{
    shot(car){ //记录车辆信息
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}
// 出口显示屏
class Screen{
    show(car,inTime){
        console.log('车牌号',car.num);
        console.log('停车时间',Date.now() - inTime)
    }
}
// 停车场
class Park{
    constructor(floors){
        this.floors = floors || [] //楼层
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} //存储摄像头拍摄返回的信息
    }
    in(car){//车辆驶入
        // 通过摄像头获取信息
        const info = this.camera.shot(car);
        // 停到某个停车位
        const i  = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in() //标记为驶入
        info.place = place //记录当前车位
        //记录信息
        this.carList[car.num] = info
    } 
    out(car){//车辆驶出
        // 获取信息
        const info = this.carList[car.num]
        // 将停车位清空
        const place = info.place
        place.out()//标记为驶出
        // 显示时间
        this.screen.show(car,info.inTime)
        // 清空记录
        delete this.carList[car.num]
    } 
    emptyNum(){ //所有层空余车位
        return this.floors.forEach(floor=>{
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个空闲车位`
        }).join('\n')
    }
}
// 层
class Floor{
    constructor(index,places){
        this.index = index //第几层
        this.places = places || []// 车位
    }
    emptyPlaceNum(){
        //当前层已占车位
        let num = 0
        this.places.forEach(p => {
            if(p.empty){
                num = num + 1
            }
        });
        return num
    }
}
// 车位
class Place{
    constructor(){
        this.empty = true
    }
    in(){
        this.empty = true
    }
    out(){
        this.empty = false
    }
}

// 测试

const floors=[]
for(let i=0;i<3;i++){
    const places=[]
    for(let j=0;j<100;j++){
        places[j] = new Place() //初始化停车位
    }
    floors[i] = new Floor(i+1,places) //初始化层
}
const park = new Park(floors)// 初始化停车场
//初始化车辆
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

pack.emptyNum()
pack.in(car1)
pack.emptyNum()
pack.in(car2)
pack.out(car1)
pack.out(car2)

pack.emptyNum()
pack.in(car3)
pack.out(car3)