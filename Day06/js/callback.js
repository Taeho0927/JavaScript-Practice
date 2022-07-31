// callback
// javascript는 함수를 값처럼 취급하므로
// 매개변수로 전달이 가능하고, 함수를 리턴하기도 함
function mul(num1, num2, callback){
    //외부에서 callback이라는 함수를 전달했다면
    if(callback){
        callback(num1*num2);
    }
}
function print(result){
    console.log("야 쟤가 이거 주더라 : "+result);
}
mul(3,9,print);

// 상품명, 가격, 개수를 전달받은 후 전체 금액을 출력한다.
// 1. 상품명과 가격은 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아 출력한다.
// 3. A함수는 B함수를 callback 함수로 전달받는다.

function pay(productName,productPrice,produntCount,callback){
    let total = productPrice*produntCount;
    callback(productName,total);
}
function printAll(productName,total){
    console.log("상품명 : "+productName+" 전체 금액 : $"+total);
}
pay("Potato", 1500, 5, printAll);

