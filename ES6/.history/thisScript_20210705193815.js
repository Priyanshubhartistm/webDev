// //................Without Strict.....//

// //1. This is a ref to an obj

 "use strict"
 console.log(this); //window

// //2. Normal fn 

"use strict"
function f() {
    console.log(this); //window
}
f()

// //3. 
"use strict"
let obj = {
    prop: 1,
    //Direct fn Bcz stored key value pair
    f: function () {
        console.log(this);
    }
}
obj.f()

// //4.
""
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

// //..................................//

// //................With Strict.....//


// "use strict"
//  a=2
//  console.log(a);

//  function f(a,a){

//  }


