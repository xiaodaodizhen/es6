
// ##############对象one 获取对象two的属性和方法

/**
 * 方法一：
 * Object.setPrototypeOf(one,two);  
 */
let one = { name: 'dd', age: 19 };
let two = { name: 'sd' };
let ages = Object.setPrototypeOf(one, two);  // 与 Object.assign(one, two) 方法一样，属于浅拷贝
console.log(ages.age);

/**
 * 方法二：
 * __proto__ 每一个对象（万物皆对象）都有这个东西，如果自己加找不到会通过这个链向上找；
 * 
 */
let one = { name: 'dd', age: 19 };
let two = {
    name: 'sd',
    __proto__: one, // 将two的原型链指向one对象，就会具备one对象的属性
    getAge() {
        return super.name;  //super在子对象中对应的是 __proto__对应的内容
    }
};
console.log(two.getAge(), two.age, two.name);


/***
 * 方法三：
 * Object.assign(one, two)
 */
let one = { name: 'dd', age: 19 };
let two = { name: 'sd' };
// assign 属于浅拷贝----es5   与setPrototypeOf()方法一样
let ages =Object.assign(one, two);;
console.log(ages.age);







