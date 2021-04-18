var arrayLike = {
    "0":1,
    "1":"大2",
    "2":"3",
    "length":3
}
// var ary = Array.from(arrayLike);
// console.log(ary);

var ary = Array.from(arrayLike, item => item *2)
console.log(ary);