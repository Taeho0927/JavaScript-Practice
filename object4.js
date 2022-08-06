// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 함
// 프로토타입은 함수로 선언하여 사용
function User(id, pw, name, age){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age || 1;  // 나이를 입력하지 않았을 경우의 처리

    this.intro = function(){
        with(console){
            log(this.id);
            log(this.pw);
            log(this.name);
            log(this.age);
        }
    };
}

han =  new User('han8811','1111','Hankook',20);
lee =  new User('lee8878','1234','leeppp');

console.log(han);
console.log(JSON.stringify(han));

lee.intro();
han.intro = intro;

function intro(){
    console.log("뭘 자꾸 캐물어요");
}
han.intro();

