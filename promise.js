let fs = require('fs'); //fileSystem

/**
 * Promise 解决的问题：
 * 1）解决多次嵌套回调  
 * 2）解决 并发异步，在同一时刻内获取的并发结果    
 * 3）可以链式调用
 * 
 * Promise 三种状态：
 * 1） resolved 成功
 * 2） rejected 失败
 * 3） pending  等待（默认状态）
 * 备注 ： 状态一旦从pending 状态 执行为resolved或rejected ，结果就固定了，不会互相转换。
 */


let promise = new Promise(function (resolve, reject) { //本方法是个exectur执行器  同步执行，
    console.log(3);
    // resolve("有钱了");
    reject('没钱了');
    throw new Error("这次失败了");// 一旦调用时出现错误代码，就会走向失败，在then方法里走失败的方法
});



// Promise 实例都有一个then方法，then方法中有两个参数，成功的方法，失败的方法
// 第一个then不管成功还是失败，只要有返回值，就会进入到第二个then的成功方法中；
promise.then(function (data) { // 执行resolve()的时候执行 代表成功---此处的参数data，是resolve(参数此处传入)调用时传入的；
    console.log(data);
}, function (err) { // 失败，执行reject()的时候执行，代表失败
    console.log(err);
});
