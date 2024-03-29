// // 箭头函数是用来简化函数定义语法的
// const fn = () => {
//     console.log(123);
// }
// fn();

// 在箭头函数中 如果函数体中只有一句子代码 
// 并且代码的执行结构就是函数的返回值， 函数体大括号可以省略
// const sum = (n1,n2) => n1 + n2;
// const result = sum(10,20);
// console.log(result);
// 在建构函数中
// const fn = v => {
//     console.log(v);
// }
// fn(20)

// 箭头函数不绑定this 箭头函数没有自己的this关键字
// 如果在箭头函数中使用this
// this关键字将指向箭头函数定义位置中的this
function fn() {
    console.log(this);
    return () => {
        console.log(this);
    }
}
const obj = {name:'zhangsan'};
// fn.call(obj);
const resFn = fn.call(obj);
resFn();