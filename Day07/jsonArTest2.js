// 상품명, 가격, 재고를 가지고 있는 프로토타입
// 3개의 객체를 하나의 Array에 담음
// JSON으로 변경
// shop.json으로 출력
// shop.json을 읽어서 Array로 변환
// 총 가격과 총 재고 수를 객체에 담은 뒤 sum.json으로 출력

let file = require('fs');

// 프로토타입 선언
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;

    // 본인을 JSON으로 변환하여 저장
    this.json = JSON.stringify(this);
}

mouse = new Product('마우스', 18900, 5);
//console.log(mouse);

let products = new Array();
products.push(mouse.json);
products.push(new Product('키보드', 38500, 9).json);
products.push(new Product('모니터', 187000, 3).json);

console.log(products);

// file.writeFile('shop.json', "["+products.toString()+"]", 'utf-8',
// function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("file write ok")
//     }
// });

file.readFile('shop.json','utf-8',getTotal);

// 총 가격과 재고를 담을 그릇 선언
let sumObj = new Object();

function getTotal(e, datas){
    // JSON을 js object로 변환
    products = JSON.parse(datas);

    let totalPrice = 0;
    let totalStock = 0;

    // totalPrice는 가격 * 재고 수를 곱한값의 합계
    products.map(function(v){return v.price*v.stock;}).forEach(function(v){totalPrice += v;});
    // totalStock은 재고 수의 합계
    products.map(function(v){return v.stock;}).forEach(function(v){totalStock += v;});

    sumObj.totalPrice = totalPrice;
    sumObj.totalStock = totalStock;

    file.writeFile('sumObj.json', JSON.stringify(sumObj), 'utf-8', function(e){
        if(e){
            console.log(e);
        }else{
            console.log("ok")
        }
    });

}