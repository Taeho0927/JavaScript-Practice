/*
    Author : Taeho GIL
    Content : Variable
    Date : 2022. 7. 30.
*/
// 동적 바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정
var data = 100;
console.log("data: "+data);
console.log("type: "+typeof(data));

var age;
console.log("type : "+typeof(age));

// hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당
// 초기화 작업은 호이스팅되지 않고 선언만 호이스팅됨
console.log("data2 : "+ data2);
var data2 = 500;
console.log("data2 : "+ data2);

f();
function f(){
    console.log("function called");
}

let data3 = "수정불가";
data3 = "싫은데?";
console.log(data3);

let aaa = 10;
//let aaa = 100;
aaa=300;
console.log("aaa: "+aaa)

for(let k =0;k<10;k++){ 
    ;
}
//console.log("for k : "+k);//{}에서 선언된 let 수는 밖에서 사용 불가
if(10>1){
    let l = 10;
    console.log("if l : "+l)
}
