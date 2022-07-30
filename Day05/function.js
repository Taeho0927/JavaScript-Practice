/*
    Author : Taeho GIL
    Content : Function
    Date : 2022. 7. 30.
*/
//1부터10까지 출력하는 함수
function printOneTen(){
    let total = 0;
    for(let i=0;i<10;i++){
        console.log(i+1);
    }
}
printOneTen();

//1~10까지 합을 출력하는 함수
function printTot(){
    let total=0;
    for(let i=1;i<11;i++){
        total += i;
    }
    console.log("printTot(): "+total);
}
printTot();

//1부터 n까지의 합을 출력하는 함수
function printTotN(n){
    let total = 0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    console.log("printTotN(): "+total)
}
printTotN(100);