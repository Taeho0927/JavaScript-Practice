var startNum = prompt("시작 숫자입력");
var endNum = prompt("끝 숫자입력");


console.log(typeof(startNum,endNum));//string
startNum = parseInt(startNum);
endNum = parseInt(endNum);
console.log(typeof(startNum,endNum));//number
for(let i=startNum;i<=endNum;i++){
    if(i%2==0){//짝수라면
        document.write(i+"<br>");
    }
    else{
        ;;
    }
}