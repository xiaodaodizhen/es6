// es5 实现es6的类代码

//负责将原型的方法和静态方法定义在构造函数和原型上
function defineProperties(target, properties) {
    for (let i = 0; i < properties.length; i++) {
        let obj = { ...properties[i], enumerable: true, writeable: true, configurable: true };
        Object.defineProperty(target, properties[i].key, obj);
    }
}

// 对不同的属性做处理，如果是原型上的方法挂载class.prototype  如果是静态方法放到class 上
function _createClass(con, protoProperty, staticProperty) {
    if (protoProperty.length) {
        defineProperties(con.prototype, protoProperty);
    }

    if (staticProperty.length) {
        defineProperties(con, staticProperty);
    }
}

var Parent = function () {
    function Parent() {
        this.name = "私有属性";
        _classCallCheck(this, Parent);  // 类的调用检测
        return { age: 9 } // 有的时候父类会有返回值，----标记一
    }

    // 用来描述这个类的原型方法和静态方法,数组中的参数叫属性描述器。
    _createClass(Parent, [// 本数组表示公共方法描述
        {
            key: "getName", value: function (params) {
                return 1000;
            }
        }
    ], [ // 本数组表示描述静态方法
            {
                key: 'fn', value: function (params) {
                    return 100;
                }
            }
        ]);
    return Parent;
}()
// Parent.prototype.eat = function () {
//     // 类的公有方法  ---方法一
// }

// Parent.a = function (params) {
//     // 方法a是Parent类的静态方法 ----方法二
//     console.log("静态方法");
// }

function _classCallCheck(instace, constructor) { // 检查当前类型有没有new出来
    if (!(instace instanceof constructor)) {  // 检测 instace 是否是construtor的实例
        throw Error("without new");
    }
}

// 继承公有方法和静态方法
function _inherits(subClass, superClass) { // subClass 子类  superClass父类
    // 子类继承父类的公有方法
    subClass.prototype = Object.create(superClass.prototype, { constructor: { value: subClass } });  // Object.create()使用指定的原型对象及其属性去创建一个新的对象，做继承方法，只继承公有方法
    // 子类继承的静态方法
    subClass.__proto__ = superClass;
}

var Child = function (Parent) {
    function Child(params) { // 类的调用检查
        _classCallCheck(this, Child);  // 检测Child 类是否在当前this的原型链上，this是否是Child实例
        //？？？？ Parent.call(this);
        let obj = Object.getPrototypeOf(Child).call(this);// 等价于 child.__proto__  继承父类的私有方法
        let that = this;
        if (typeof obj === "object") {  // 如果返回结果是obj，就会把obj作为实例this----对接标记一
            that = obj;
        }
       
        return that;
    }
    _inherits(Child, Parent);// 表示继承，儿子继承父亲
    return Child;// 闭包最后返回Child的方法，便于使用时new Child()，如果不返回，就没办法new
}(Parent); // 此处使用闭包是为了继承Parent，并将Parent通过参数传入child

let a = new Child();
console.log(a);
//Child.a();// 使用继承类的静态方法，不需要new 实例化
