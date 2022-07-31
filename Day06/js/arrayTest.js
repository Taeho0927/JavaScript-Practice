// js의 Array객체는 길이를 설정하지 않아도
// 원하는 인덱스에 원하는 값을 추가할 수 있다.
// 타입도 지정되어 있지 않아 다양한 타입 추가 가능

var datas=[];
datas[0] = 20;
console.log(datas);
datas[3] = 20;
console.log(datas);

var datas2=[20,5,6,12,10];
// push() : 가장 마지막에 값 추가
datas2.push(19);
console.log(datas2);

// join() : 각 요소를 구분값으로 구분하여 리턴
console.log(datas2.join(":"));

// slice (begin, end)
console.log(datas2.slice(1,3)); //(초과,미만)
console.log(datas2.slice(2));  //begin 인덱스부터 끝까지

// forEach(콜백함수(변수){실행할 문장;})
datas2.forEach(
    function(value){
        console.log(value);
    }
);

// forEach(콜백함수(변수, 인덱스, Array객체))
datas2.forEach(
    function(value,index,ar){  //ar은 본인을 의미
        ar[index] = value * value;
    }
);
console.log(datas2);

// indexOf(값) : 값을 Array에서 찾아서 인덱스 번호 리턴
// indexOf(값, start, end) : 값을 start index부터 end index까지 찾음
console.log(datas2.indexOf(100));
console.log(datas2.indexOf("abc")); // 없으면 음수가 리턴됨

// Array() 로 객체를 선언할 때 용량을 정수로 설정하면
// 미리 그 만큼을 할당함
let datas4 = new Array(7);
datas4.push("월");
console.log(datas4);

let datas5 = new Array(7);
let index = 0;
datas5[index++] ="월";
console.log(datas5);
datas5[index++] ="화";
datas5[index++] ="수";
datas5[index++] ="목";
datas5[index++] ="금";
datas5[index++] ="토";
datas5[index++] ="일";
console.log(datas5);

console.log(datas5.toString());

// new Array(초기값)
let week = new Array("월","화","수");
week.forEach(function(value){
    console.log(value+"요일");
});