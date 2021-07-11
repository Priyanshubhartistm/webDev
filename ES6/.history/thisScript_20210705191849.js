//1. 
console.log(this);

//2. 
function f(){
    console.log(this);
}

f()

//3. 

let obj={
    prop:1,
    f:function(){
        console.log();
    }
}