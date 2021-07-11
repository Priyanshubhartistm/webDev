//1. This is 
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
        //
        function f2() {
            console.log(this);
        }
        f2();
    },
};

obj2.f()
