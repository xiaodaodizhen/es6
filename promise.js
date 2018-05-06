let fs = require('fs'); //fileSystem

//Promise  默认情况下是等待状态，如果成功了就不会失败，失败了就不会成功，不会相互转换

// 三种状态： resolved 代表成功， rejected 代表失败 ， pending 代表等待
let promise = new Promise(function (resolve, reject) { //本方法是个exectur执行器  同步执行，
    console.log(3);
    // resolve("有钱了");
    reject('没钱了');
    throw new Error("这次失败了");// 一旦调用时出现错误代码，就会走向失败，在then方法里走失败的方法
});

// Promise 解决的问题：1）解决多次嵌套回调   2）解决 并发异步，在同一时刻内获取的并发结果    3）可以链式调用


// Promise 实例都有一个then方法，then方法中有两个参数，成功的方法，失败的方法
promise.then(function (data) { // 执行resolve()的时候执行 代表成功---此处的参数data，是resolve(参数此处传入)调用时传入的；
    console.log(data);
}, function (err) { // 失败，执行reject()的时候执行，代表失败
    console.log(err);
});
