//...................... TRAVERSE OF ARRAY.............
// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// for(let i=0; i< arr.length; i++ ){
//     for(let j=0; j< arr.length; j++){
//         console.log(arr[i][j]);
//     }
// }



// ........................Q1..........

// let arr = ["Red", "Green", "White"];
// let ans = "";
// for(let i=0; i< arr.length; i++){
//     ans +=arr[i];
// }
// console.log(ans);



// ........................Q2...............
// let arr = [[1,2,3], [4,5,6], [7,8,9]];

// let sum =0;
//  for (let i=0; i < arr.length; i++){
//      for ( let j =0; j < arr [i].length; j++){
//          sum += arr[i][j];

//      }
//     }

// console.log(sum);



// ..................Q3................

// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// for (let i=0; i < arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[j]);
//     }
// }


//.....Print the element of 2D Array...........

// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// let ans = [];

// for (let i=0; i < arr.length; i++){
//      for ( let j =0; j < arr [i].length; j++){
//          ans.push(arr[i][j]);

//      }
//     }

// console.log(ans);


// .............Increase the element of Array by 2

// let arr = [1,2,3,4];
// for (let i=0; i < arr.length; i++){
//     arr[i]+=2;
// }
// console.log(arr);




// Sir... Q3 Most Frequent no findout

// let arr = [1,2,3,2,4,4,5,6,4];
// let max = 0;
// let ele;
//  for( let i=0; i < arr.length; i++){
//      let count = 0;
//      for( let j= 1; j < arr.length; j++){
//          if(arr[i] == arr[j]){
//              count += 1;
//          }
//      }
//      if(count > max){
//          max = count;
//          ele = arr[1];
//      }
//  }
//  console.log(ele);








// ..............Function Start.............................................................................

// function abc(a,b){
//     console.log("hello World");
// }
// abc();

// ..........................map function.................


// let arr = [1,2,3,4];
// function print(data, index){
//     console.log(index, data);
// }
// arr.map(print)


// let arr= [1,2,3,4];
// function addTwo(d,i){
//      return d+2;
//     //return d+i;
// }
// arr = arr.map(addTwo);
// console.log(arr);


//.............Print only odd number..............



// let arr = [1,2,3,4,5,6,7,8];
// let ans1 = [];
// for(let i=0; i< arr.length; i++){
//     if(arr[i]%2 !=0){
//         ans1.push(arr[i]);
//     }
// }
// console.log(ans1);



//.............................Filter Method.........................


// let arr = [1,2,3,4,5,6,7,8];
// function removeEven(data, index){
//     if(data%2 == 0){
//         return false;
//     } else{
//         return true;
//     }

// }
// let ans = arr.filter(removeEven);
// console.log(ans);



// ...................................................................
// let arr = [1,2,3,4,5,6,7,8];
// function removeEven(data,index) {
//     return (data % 2 != 0)
// }

// let ans = arr.filter(removeEven);
// console.log(ans);



//...........................25th March 2021...................................
// let abc = 123;
// let str = `Rupesh${abc}`;
// console.log(str);


// let a = 1;
// let b = 2;
// let c =3;
// let str1 = "Rupesh";
// let str2 = 'Kumar';
// let str3 = `pepcoding ${a + b + c}`;  // add variable using dollar
// console.log(str1, str2, str3);
//console.log(str1[2]);



//.................STRING TRAVERSE.............................................
// let str = "";
// for(let i=0; i < str1.length; i++){
//     console.log(str1[i]);
// }

//.........................................................................


// console.log(parseInt(10));

//.........................................................................



//Que1.  ........Decimal to Binary Conversion...................

// function decimalToBinary(number){
//     let ans = "";
//     while(number > 0){5
//         let rem = number %2;
//         ans = rem + ans;
//          number = Math.floor(number /2);
    
//     }
//     console.log(ans);
// }
// decimalToBinary(parseInt("10"));

//........................................................................


//Que2................Binary to decimal...................................................

// function BinaryToDecimal(binary){
// let ans =0;
//     let power = 0;

//     for (let i= binary.length -1; i >=0; i--){
//         let binaryDigit = parseInt(binary[i]);
//         ans += (Math.pow(2, power) * binaryDigit);
//         power +=1;
//     }
//     console.log(ans);
//     }
//     BinaryToDecimal("1010");

 //...................................................................................



//............... SUBSTRING Concept.......................................

// let string = "Bhavesh Bansal";
// console.log(string.substring(3,7));
//......................................................


//....................//.toUpperCase problem..................................

// let string = "bhavesh bansal";

// console.log(string.toUpperCase());

//.....................................................................


//................................ OBJECTS IN JAVASCRIPT.............................................

// let obj = {
//     "hello1"  : 1,
//     2: "hello",
//     "hello3" : "three"
// }



// obj[2] = "two";
// obj["five"] = 5;
 //  console.log(obj["hello3"]);
 // console.log(obj[2]);

// console.log(obj["six"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


//.....Split() method ( STRING TO ARRAY CONVERSION) ......................

// let string = "i love pepcoding";
// console.log(string.split(" "));  // split() on space
// console.log(string.split(""));   // split() on empty string
// console.log(string.split("i"));
// console.log(string.split("I"));

// let string = "ii";
// console.log(string.split("i"));

//............join() ARRAY TO STRING CONVERSION ..............................

// let string = "I love pepcoding";
// console.log(string.split(" "). join(" "));
// console.log(string.split(" "). join("$"));
// console.log(string.split(" "). join(" $ "));

// let arr = ["hello", "how", "are", "you"];
// console.log(arr.join(" "));

let str = "bhavesh";
console.log(str.charCodeAt(1));








