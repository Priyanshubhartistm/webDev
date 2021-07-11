//1. This is a ref
console.log(this);

//2. 
function f() {
    console.log(this);
}
f()

//3. 
let obj = {
    prop: 1,
    f: function () {
        console.log(this);
    }
}
obj.f()

//4.
let obj2 = {
    prop: 1,
    f: function () {
        //indirect fn Bcz not stored as key value pair
        function f2() {
            console.log(this); //Window
        }
        f2();
    },
};

obj2.f()
