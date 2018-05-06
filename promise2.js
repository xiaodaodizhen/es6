let fs = require("fs");// 只要装了node就可以使用本方法，fileSystem
function read(url) {
    return new Promise(function (resolve, reject) {
        fs.readFile(url, 'utf8', function (err, data) {
            if (err) reject(err);
            resolve(data); // then 执行成功回调函数的参数是resolve的参数data
        });
    });
}

//  如果then中返回了一个promise 会将promise的结果继续传给第二个then----涉及到then的链式写法
read('1.txt').then(data => {
    console.log(data);
    return data;// 如果返回了一个普通值(不是promise对象)，会将这个值作为下一次then的成功会回调
    //return read(data); 返回的是promise 对象，会把结果传给第二个then
}, err => {//err的回调可以不写，错误信息会在catch方法中捕获到，如果写了，错误会在本函数中捕获，所有err同理
    console.log(err);
}).then(data => {// promise 的第一次then无论返回什么，都会进入下一次then的成功态；
    console.log("$" + data);
}, err => {
    console.log(err);
}).catch(e => {
    // catch的用法，catch可以实现错误的捕获，如果上面有自己的err回调方法，会走自己的，如果没有就会走到catch；
    console.log(e);
});



// 同时读多个文件（可以理解为同时有多个任务）

//Promise.all 方法执行后返回的依旧是promise实例
//all方法，多个任务全部成功才算是成功，如果有一个失败了就算是失败
Promise.all([read("1.txt"), read('2.txt')]).then(([one, two]) => { // 此处[one,two]用到了对象解构
    console.log(one, two)
});
Promise.all([read("1.txt"), read('2.txt')]).then((data) => { // 此处data是一个数组，因为读取的是一个数组，所以返回也是一个数组
    console.log(data)
});

//race（赛跑-谁的返回的快就用谁的结果，失败和成功也是由最快返回的结果决定） 如果有一项任务先成功了，那就成功，如果有一项任务失败了，那就是失败
Promise.race([read("1.txt"), read('2.txt')]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


// Promise 的静态方法,会将[1,2,3]转为一个promise对象，然后执行then方法

Promise.resolve([1, 2, 3]).then(data => {
    console.log(data);
});

Promise.reject([1, 2, 3]).then(null, (e) => { // 如果不写成功方法，直接写null即可
    console.log(e);
});


//不管promise 中的then走的是成功还是失败，都会将返回值作为下一个then的成功结果
let p = new Promise(function (resolve, reject) {
    reject();
}).then(data => {
    console.log(data);
}, err => {
    // return 100;
    throw new Error("抛出错误异常，会走到下一个then的失败态方法里");
}).then(data => { // 取得是上一个then的返回值（只要不抛出错误，就算是有返回值，什么都不返回，也会走到下一个then的成功态里，只不过data参数为undefined）
    console.log('是' + data);  // 第一个then返回值为100（只要有返回值，就会走到本then的成功态方法里）
}, err => {
    console.log(err);
});