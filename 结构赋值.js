// 对象解构允许我们使用变量的名字匹配对象的属性 匹配成功 将对象属性的值赋值给变量
let person = {name:'zhanshan', age:20};
// let { name, age } = person;
// console.log(name);
// console.log(age);
let {name:myName,age:myAge} = person;//myName myAge 属于别名
console.log(myName);
console.log(myAge);