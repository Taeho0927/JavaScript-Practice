var file = require('fs');

var train = new Array();
var hong = {name : '홍길동', age : 20, level : 1};
var lee = {name : '이순신', age : 40, level : 2};
var jang = {name : '장보고', age : 19, level : 3};

train.push(hong,lee,jang);

console.log(train);

var trainJSON = JSON.stringify(train);
console.log(trainJSON);

// file.writeFile('train.json', trainJSON, "utf-8",
// function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("File Write OK");
//     }
// });

file.readFile('train.json', "utf-8", 
function(e, datas){
    let trainAr = JSON.parse(datas);
    console.log(trainAr);

    for(let i in trainAr){
        console.log(i);
        console.log(trainAr[i].name+":"+trainAr[i].level+"등석");
    }
});

