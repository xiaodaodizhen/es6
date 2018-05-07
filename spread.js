
/**
 *   ... 剩余运算符（剩余参数--多用于函数中使用）
 * 
 */
function name(a, ...b) {
    console.log(...b);
}
name(1, 2, 3, 4, 4);


function nameNew([, , ...c]) {
    console.log(...c);
}
nameNew([1, 2, 3, 4, 5]);


/**
 *   ... 展开运算符
 * 
 */
let arr = [7, 3, 1, 2, 4];
console.log(Math.min(...arr)); // 将arr数组展开为  7 3 1 2 4，传入参数


/**
 * 数组展开：可以合并数组
 * 
 */
//1. 老版本写法
let arr1 = [4, 5, 6, 23, 2];
let arr2 = [0, 4, 53, 2];
let arrNew = [].concat(arr1, arr2);
console.log(arrNew);

// 2. 新版本写法
let arrNewTwo = [...arr1, ...arr2];
console.log(arrNewTwo);


/**
 * 对象展开：可以重新组成对象
 * 
 */
let school = { name: '小邪恶', age: 9 };
let city = { name: '大街', address: '小巷' };
let info = { ...school, ...city };// 如果两个对象中有相同的属性名字，后面对象的属性名字所对应的值会覆盖前面对象的属性值
console.log(info);

let obj = Object.assign(school, city);// assing()方法也能实现上述操作,结果相等的两种方案
console.log(obj);


// 深拷贝 （两者没有关系）    浅拷贝（两者有关系，引用同一个空间）---assign和... 运算符都是浅拷贝
let city = { name: '小邪恶', age: { age: 9 } };
let newCity = { ...city };
city.age.age = 11; // 更改city的属性,newCity的属性值也会改变---浅拷贝
console.log(newCity);


/**
 *  深拷贝 case1：
 *  JSON.stringify() 将对象或数组转为json字符串，不支持函数和正则；
 *  JSON.parse() 构造由字符串描述的数组和对象
 * 
 */
let address = { name: 'sdfsdf', age: { age: 1 }, fn: function () { }, reg: /\d+/ };
let result = JSON.parse(JSON.stringify(address));  // 将adress对象转行为json字符串，然后在转为对象。
address.age.age = 2;
console.log(result);  // 结果fn属性丢失，reg变为对象{}


/**
 * 深拷贝 case2：
 * 1)采用递归进行拷贝
 * 2)保证如果是一个对象(或数组)，生成一个空对象(或数组)，将值放到对象内
 * 3)Object.prototype.toString.call(current) 判断当前数据类型
 */

let school = { name: "dfsfs", age: { age: 1 }, fn: function () { }, arr: [1, 3, 3] };
function deepCline(parent, c) {
    let child = c || {};
    for (const key in parent) {
        let current = parent[key];
        if (typeof current === "object") {
            child[key] = Object.prototype.toString.call(current) === "[Object Array]" ? [] : {};
            deepCline(parent[key], child[key]);
        } else {
            child[key] = parent[key];
        }
    }
    return child;
}
console.log(deepCline(school));


/**
 * 深拷贝 case3:
 * 
 *  new obj.constructor(),
 */

function deepClone(obj) {
    // 如果传递的是null 那就不处理
    // 函数没有引用关系
    if (typeof obj !== 'object') return obj;
    if (obj == null) return null;
    // 处理日期和正则
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    let instance = new obj.constructor(); // 看当前实例的constructor,返回的是[] {} 空对象或空数组， Object.prototype.toString.call(current) === "[Object Array]" ? [] : {};可以代替这样赋值[] 或{}
    // 实现深拷贝
    for (let key in obj) {
        instance[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
    return instance;
}
// 函数不需要重新拷贝
let obj = { a: { a: 1 } }
let newObj = deepClone(obj);
obj.a.a = 2;
console.log(newObj)



