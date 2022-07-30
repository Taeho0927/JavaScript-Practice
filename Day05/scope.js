/*
    Author : Taeho GIL
    Content : Scope
    Date : 2022. 7. 30.
*/
if (10>1){
    var data4 = 10; //지역변수 같아 보이나 함수가 아니므로 전역임
}

console.log("#1 "+data4);

for(var i=0;i<10;i++){   //반복문에서 선언된 변수도 전역임
    ;
}
console.log("#2 "+i)

var x;   // 전역변수
function f(){
    var y;   // 지역변수
    x=10;   //전역변수
    y=10;   //지역변수
    z=10;  //전역변수
}

f();
console.log("x: "+x);
//console.log("y: "+y); //지역변수는 외부에서 사용불가
console.log("z: "+z);