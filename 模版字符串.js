// let name = `张三`
// let sayHello =  `Hello, 我的名字叫${name}`
// console.log(sayHello);
// let result = {
//     name: "zhangsan",
//     age:20
// };
// let html = `
//     <div>
//         <span>${result.name}</span>
//         <span>${result.age}</span>
//     </div>
// `
// console.log(html);
const fn = () => {
    return '我是fn函数'
}
let html = `我是模版的字符串${fn()}`
console.log(html);