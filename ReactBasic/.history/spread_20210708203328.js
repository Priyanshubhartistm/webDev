// SPREAD OPERATOR.......................

// let a = [1,2];
// let b = [3,4];
// let c = [a,b];
// let d = [...a, ...b];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// slice().........................................

// let a = [4,5,6,7];
// console.log(a.slice(1,3));
// console.log(a.slice(2))

//.............Question.................
 //For a given array create a new array and add element 3 in new array. Then print the new array.

 //USING LOOP
let a = [4,8,7,9,12,13,16];
let b = [];

for(let i =0; i<a.length; i++){
  b[i] = a[i];
}

b[3] = 3;

for(let i =3; i<a.length;i++){
    b[i+1] = a[i];

}
console.log(a)
console.log(b)

// Above question using Slice & Spread Operator

       






















// let a = {
//     x: {
//       z: "gamma",
//     },
//     y: "beta",
//   };
  
//   let {
//     x: { z },
//   } = a.x;
  
//   console.log(a);
//   console.log(z);