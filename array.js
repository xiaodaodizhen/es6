// 数组新方法

//1.Array.from()  类数组转化为数组
let res = { 0: 1, 1: 3, length: 2 };
let newRes = Array.from(res);// 等价与 Array.prototype.silce.call(arguments,0);
console.log(newRes);


// [...args]
function a() {
    console.log([...arguments]);
}
a(1, 2, 3);
//2.Array.of()

console.log(Array.of(3));// 生成[3]
console.log(Array(3));// 生成 [] [] [] ,三个空数组

console.log(Array(4).fill(3));//生成一个元素数量为4个，元素值为3的数组

// 3.reduce map filter some every  forEach--es5
// 4.find findeIndex--es6
//includes --es7


// ## reduce  --收敛，叠加   实现原理
Array.prototype.myReduce = function (cb, pre) {
    let prev = pre || this[0];
    for (let i = pre ? 0 : 1; i < this.length; i++) {
        prev = cb(prev, this[i], i, this);
    }
    return prev;
}

let result = [2, 3, 5, 65].myReduce((prev, next, index, current) => {
    if (index == current.length - 1) {
        return (prev + next) / current.length;
    }
    return prev + next;
}, 4); // 参数4代表手动指定的数组的第一项，数组长度不会变；
console.log(result);



// filter过滤 返回true表示当前项留下，false表示不留
Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        cb(this[i]) ? arr.push(this[i]) : void 0;
    }
    return arr;
};
let filterRu = [2, 4, 6, 2, 7].myFilter((item, index) => {
    if (item > 5) return true;
});
console.log(filterRu);


// some 和every 是一对，some找到true，返回true。 every找到false返回false，找到后停止

let flag = [2, 4, 6, 7].some((item) => {
    return item > 2;
});
console.log(flag);

let flag2 = [2, 4, 65].every(item => {
    return item < 60;
});
console.log(flag2);
// find 找到后返回的是当前项，找不到返回undefined,找到后就停止，不会在继续查找。

console.log([1, 3, 4, 5, 6, 3].find((item) => {
    return item == 3;
}));

// includes 和indexOf功能一样
console.log([2, 4, 5, 6].includes(4));
