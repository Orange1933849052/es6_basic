var ary = [{
    id:1,
    name:'张三'
},{
    id:2,
    name:'李四'
}]
let target = ary.find(item => item.id == 2);
console.log(target);