// const request = require ("request");
// const cherrio = require ("cheerio");
// const fs = require("fs");
// request("https://www.google.com",callback);

// function callback(err, res, html){

//console.log(html);
//.............................................    
    // console.log(html);
//...................................................
//Cherrio wapper.......
        // if(!err){
        //     let $ = cherrio.load(html);
        //     console.log($);
        // }
  //..................................   
//   if(!err){
//             fs.writeFileSync("hello.html", html);
//             let $ = cherrio.load(html);
            
//             let myEmail = $("#tsuid1");

//             console.log(myEmail.attr("value"));
//         }
// }
// ..........................................................................


//....MaxWickets players Name FETCH................................................

// const request = require ("request");
// const cherrio = require ("cheerio");
// const fs = require("fs");
// request("https://www.espncricinfo.com/series/women-s-senior-one-day-trophy-2020-21-1255263/jharkhand-women-vs-railways-india-women-final-1255735/full-scorecard",callback);

// function callback(err, res, html){

//     if(!err){
//         let maxWickets = 0;
//         let maxWicketsPlayer;

//         // fs.writeFileSync("hello.html", html);

//         let $ = cherrio.load(html);
//         let rows = $(".table.bowler tbody tr")
//         for( let i=0; i < rows.length;i++){
//             let columns = $(rows[i]).find("td");
//             let wickets = parseInt($(columns[4]).text());

//             if(wickets > maxWickets){
//                 maxWickets = wickets;
//                 maxWicketsPlayer = $(columns[0]).text();
//             }
//         }

//         console.log(maxWicketsPlayer);

//     }
// }
        
//........................................................................................................
        
        // for(let i=0; i < comments.length;i++){
        //     console.log($(comments[i]).text());

        //}
        
        //  let lastComment = $(comments[0])   Only One comment print
        //  console.log(lastComment.text());
  //.....................................................................................................................
  
  

