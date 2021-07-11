// let a = [1,2,3]

// a.map(function(element,index,completeArr){
//     console.log(element);
//     console.log(index);
//     console.log(completeArr);
    
// })


// let a = [4,11,13]
// a.map(function(element){
//     console.log(element);
// })



let obj = {
    someArr: [3,7,12],
    f: function(){
        this.someArr.map(function(e){
            console.log(2*e);
        });
    }
}