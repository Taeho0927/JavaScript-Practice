// Date 객체
// var 객체명 = new Date();

// Date객체의 주요 메서드
// getFullYear() : 4자리 연도
// getMonth() : 0~11 사이의 정수 //+1을 해야 현재의 월
// getDate() : 한 달 내의 날짜
// getDay() : 한 주 내의 요일 (0:일요일, ..., 6:토요일)
// getHours() : 0~23 사이의 정수
// getMinutes() : 0~59 사이의 정수
// getSeconds() : 0~59 사이의 정수
// getMilliseconds() : 0~999 사이의 정수
// getTime() : 1970년 1월1일 0시0분0초 기준으로 현재의 밀리초
// get -> set 메서드들이 존재함

var now = new Date();
console.log(now.toUTCString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());