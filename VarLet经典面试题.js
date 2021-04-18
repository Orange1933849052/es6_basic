// var arr = [];
// for( var i = 0; i<2;i++) {
//     arr[i]=function (){
//         console.log(i);
//     }
// }
// arr[0]();
// arr[1]();
var arr = [];
for(let i = 0; i<2;i++) {
    arr[i]=function (){
        console.log(i);
    }
}
arr[0]();
arr[1]();