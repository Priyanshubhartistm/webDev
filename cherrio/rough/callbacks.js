
// function print(val){
//     console.log(val);
// }


function print(val){
    console.log(val);
}

function sum (n1, n2, print){
    let sum = n1 +n2;
    print(sum);
}
sum(2,3,print);




// function sum (n1, n2, print){
//     let sum = n1 +n2;
//     print(sum);
// }
// sum(2,3,print);

// const fs = require("fs");


// function print(err, data){
//     if(!err){
//         console.log(data);
//     }else {
//         console.log(err);
//     }
// }
// fs.readFile("q1.html","utf-8", print);



//....Jasbir Singh Code.........//




// const fs = require("fs");

// let count =0;
// function callback(err,data){
//     if(!err){
//         count +=1;
//         if(count < 10)
//         {console.log(data);
//         fs.readFile("q"+(count +1)+ ".html", "utf-8", callback)}
//     }
// }
// fs.readFile("q1.html", "utf-8", callback);


//.....Parallel fun chal rha hai yha.......//

// const fs = require("fs");
// function callback(err, data){
//     if(!err){
//         console.log(data);
//     }
// }
// for(let i=1; i<=10; i++){
//     fs.readFile("q1" + i + ".html", "utf-8", callback);
// }






