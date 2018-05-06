// 等号左边和右边结构相等，就可以解构
// 解构叫 既声明又赋值

/**
 * 1. 数组解构，有序解构，必须按照顺序，
 */
let arr = [1, 3, 4];
let [a, b, c] = [1, 3, 4];// 数组的key要对应上


/**
 * 2.对象解构，无序的，只要key的名字对应就可以
 * :重命名方式
 * =赋予默认值方式
 */
let { age, name } = { name: 'dddd', age: 9 }  // 对象，key的名字要对应上
console.log(age, name);
let { age, name: n } = { name: 'dddd', age: 9 }  // 将name重命名为n，采用 name:n的方式
console.log(age, n);


/**
 * 3. 复杂数据类型解构
 */
let arrObj = [{ name: 'ceshi', age: 10 }, '朝堂区', [1, 2, 3]];
let [, b] = arrObj; // [不要第一项, 获取b的值，不要第三项]的格式
console.log(b);//朝堂区
let arr2 = [{ name: 'ceshi', age: 10 }, '朝堂区', [1, 2, 3]];
let [{ age, address = "东大街" }, b] = arr2;  // 第一项对应的是{ name: 'ceshi', age: 10 }，address="东大街"是赋的默认值


/**
 * 
 * 应用解构
 */
function ajax({ url = new Error("url为空"), data = "", method = 'get' }) { // 使用解构赋值，并赋默认值（解构有值则用，如果没有则使用默认值）。
    // let url= option.url || new Error("url为空");  其他使用方法
}

ajax({ url: '/zef', data: {} });