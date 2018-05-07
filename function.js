// ####函数新增功能
// 函数
function fn(params) {

}

// 1.默认参数
function mr(url = "ddd") {
    console.log(url);
}
mr();

//2. 箭头函数 （高阶函数 偏函数  函数柯里化）,函数变量会提升；
// 1)没有 function 关键字  ,函数参数和函数体用箭头连在一起，如果参数只有一个，可以省略包裹参数的() ；
// 2)函数体中如果省略return则可以不写{}(箭头后面就是返回值)；
// 3)没有arguments，没有this指向；
let a = b => b;
console.log(a("你好"));

// 返回对象时，用()包裹，不能直接用返回对象，不然对象的{}大括号，会被认为是箭头函数的大括号，造成报错。
function z() {
    return { name: 'xg' }
}
let z = a => ({ name: 'xg' })

// 高阶函数，函数可以当作参数，或者返回函数
function e(x) {
    return function (y) {
        return x + y
    }
}
//---以上高阶函数简写
let e = x => y => x + y;
console.log(e(3)(4));

// 3. 参数的剩余(只能用作最后一个参数)
function sum(one, ...arrs) {
    console.log(one, arrs);
    return one + eval(arrs.join("+"));
}
sum("￥", 2, 3, 4, 5, 6);




// 闭包：作用域不释放，私有化。
// 函数执行的一瞬间也会产生闭包，执行完毕后会释放掉，闭包结束。
// 函数的返回值是一个引用数据类型，被外部变量接受，这个作用域无法释放；



/**
 * 
 * this 指向问题
 * 1.谁调用,this就是谁
 * 2.箭头函数没this,this指代的是上一级的this
 * 3.没有arguments 需要自己创造arguments
 * 4.箭头函数内部没有this指向，箭头函数没有arguments 
 */
let a = 2; // 不会声明到全局上
let obj = { // 对象不是作用域
    a: 1,
    fn: () => {
        setTimeout(() => {
            console.log(this.a)
        })
    }
}
obj.fn();
let a = (...arguments) => {
    console.log(arguments);
}
a(1, 2, 3, 4, 5);
