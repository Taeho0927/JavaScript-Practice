// 기차 등급별 좌석 구현
// 3명의 고객 존재

train = new Object();
hong = {name :'홍길동', age : 592, level : 1};
lee = {name :'이순신', age : 700, level : 2};
jang = {name :'장보고', age : 19, level : 3};

train.passenger1 = hong;
train.passenger2 = lee;
train.passenger3 = jang;

console.log(train);
console.log(train.passenger1.age);
