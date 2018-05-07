/**
 * var
 * 1.作用域的问题（会污染全局作用域）;
 * 2.var 的声明问题 （可能重复声明）;
 * 3.变量提升  预解释
 */
console.log(d);
var d = 1;  // 会预解释，但是不会赋值

console.log(h);
function h() {
    // 函数声明既会预解释也会赋值
}


/**
 * const
 * 常量的值一旦赋值，就不能改变；
 * 一般会用大写来表示，值不能被更改
 */
const W = 12;
W = 13;
console.log(W);



/**
 * let
 * 1.同一个作用域下不能重复声明;
 * 2.不能声明到window上（const常量声明同规则）;
 * 3.不会预解释
 */
console.log(z);
console.log(g);
let z = 10;
let g = function () {

}


console.log(a);// 不会预解释
let a = 1;

// 备注拓展：{} 可以表示一个作用域（里面必须含有let ，否则无效）；
{
    let a = 1;
}

