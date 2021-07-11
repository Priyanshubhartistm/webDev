//................Without 

//1. This is a ref to an obj
console.log(this); //window

//2. Normal fn 
function f() {
    console.log(this); //window
}
f()

//3. 
let obj = {
    prop: 1,
    //Direct fn Bcz stored key value pair
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
