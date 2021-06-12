let a = 2;

let epromise = new Promise(function(res,rej){
    if(a%2==0){
        res("yes! number is even");
    }else{
        rej("No! number is odd");
    }
});
// console.log(epromise);  //   O/P :> Promise { 'yes! number is even' }

epromise.then(function(data){
    console.log(data);

}) .catch(function(err){
    console.log(error);
});


epromise.then(function(data){
    console.log(data);

})

epromise.then(function(data){
    console.log(data);

})

epromise.then(function(data){
    console.log(data);

})