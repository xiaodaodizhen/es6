// 模板字符串
let a = "/";
let z = `这是字符串模板${a}使用方式`;
console.log(z);

/***
 * 模拟一个字符串模板的实现
 */
let name = "zfpex";
let age = 9;
let str = '(\'${name}\')今年（${age}）岁了';
str = str.replace(/\$\{([^}]*)\}/g, function () {
    return eval(arguments[1])
});
console.log(str);

/**
 * 字符串模板的优势
 * 1）可以换行（es6之前字符串不可以换行）
 * 2）可以写js表达式
 * 3）可以在模板中使用方法${方法名(参数)}
 */
let arr = ['ddd', 0];
// 格式化变量方法
let format = function (val) { 
    return `$(${val})`;
};
let newarr = arr.map((e) => { // map 映射，可以将数组映射成一个新的数组
    return (
        `<li>
             <span>${format(e)}</span>  
        </li>
        `
        //  <span>${format(e)}</span>    模板字符串中可以使用方法：${方法名(参数)}
    );
});

let str = `<ul>
           ${newarr.join("")}
          </ul>`;
console.log(str);


/**
 * 带标签的模板字符串，可以根据自己定义的方法，对字符串进行扩展操作
 */
let name = "dfsfs";
let ageLast = 9;
function tag(arrs, ...args) {  // 函数的剩余运算符，只能在函数的最后参数中使用
    console.log(arrs, args);
    let str = "";
    for (let i = 0; i < arrs.length; i++) {
        str += (arrs[i] + "(" + args[i] + ")");

    }
    str += arrs[arrs.length - 1];
    return str;
}
let newStr = tag`名字是:${name},年龄是${ageLast}.${ageLast}`;  // tag是上面定义的tag方法，`名字是:${name},年龄是${ageLast}.${ageLast}`这是传入tag方法的参数，，注意传值方式和传值参数类型
console.log(newStr);

// ## 以下是字符串方法

/**
 *  includes 是否包含 
 *  返回布尔值
 */
let strs = "sfsfsdfsf";
console.log(strs.indexOf('sfs') > -1);
console.log(strs.includes('sf'));


/**
 *  endsWith 是否以XX结尾 
 *  返回布尔值
 */
console.log(strs.endsWith('sfs'));


/**
 *  startsWith 是否以XX开头
 *  返回布尔值
 */
console.log(strs.startsWith('sfs'));


/**
 * padStart(x,y) 从前面补0,x代表补充几位，y代表补充的内容
 *  
 */
let date = new Date();
let strDate = `${date.getFullYear()}年${(date.getMonth() + 1).toString().padStart(8, 0)}月${date.getDate()}日`;
console.log(strDate);


/**
 * padEnd(x,y) 从后面补0,x代表补充几位，y代表补充的内容
 *  
 */
let date = new Date();
let strDate = `${date.getFullYear()}年${(date.getMonth() + 1).toString().padEnd(8, 0)}月${date.getDate()}日`;
console.log(strDate);

// repeat 
console.log("1".repeat(1000));