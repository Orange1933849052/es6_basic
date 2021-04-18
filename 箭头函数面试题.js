var age = 100;
var obj = {
    age: 20,
    say: () => {
        console.log(this.age);
    }
}
obj.say();