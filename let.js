// 使用let关键字声明的变量没有变量提升
// console.log(a);
// let a =100;

// 使用let声明的变量具有暂时性死区特性
var num = 10
if(true) {
    console.log(num);
    let num = 20;
}
