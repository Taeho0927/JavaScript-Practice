/*Javascript는 overloading을 지원하지 않는다.*/
function add(num1, num2, num3){
    return num1+num2+num3;
}
function add(num1, num2){
    return num1+num2;
}

console.log(add(1,3));
console.log(add(1,3,5));
//---------------------------
function add(...args){
    let total = 0;
    for(let i=0;i<args.length;i++){
        total+=args[i];
    }
    return total;
}
console.log(add(1,3,5));

// 나이, 이름, 성별을 입력받고
// 이름이 없다면 "NO Name", 성별이 없다면 "미선택"
function intro(age, ...args){
    let ageMsg = age;
    let nameMsg = args[0] ? args[0] : "NO Name";
    let genderMsg = args[1] ? args[1] : "미선택";
    
    console.log(ageMsg);
    console.log(nameMsg);
    console.log(genderMsg);
}
intro(10)

function intro(age, name, gender){
    let ageMsg = age + "세";
    let nameMsg = name || "NO Name";    //입력이""이면 NO Name
    let genderMsg = gender || "미선택";     //입력이""이면 미선택
    
    console.log(ageMsg);
    console.log(nameMsg);
    console.log(genderMsg);
}
intro(11,null,null)
intro(20,"David","F")

function intro(age,name,gender){
    let nameMsg;
    let ageMsg = age+"세";
    let genderMsg;

    if(arguments.length==2){
        if(name.includes("남") || name.includes("여")){
            genderMsg = name;
            nameMsg="NO Name";
        }
        else{
            nameMsg=name;
            genderMsg="미선택";
        }
    }
    else{ // age만 있거나, 모두 있거나
        nameMsg = name || "NO Name";
        genderMsg = gender || "미선택";
    }
    console.log(ageMsg);
    console.log(nameMsg);
    console.log(genderMsg);
}
intro(900,"Abraham");
intro(108,"여");

// 문자열에 있는 includes() 메서드에 조회할 값을 전달하면
// 포함되어 있으면 true, 없으면 false return
console.log("ABC".includes("A"));
console.log("ABC".includes("Z"));

// 초기값 설정
// ""일 때 처리, true 일 때는 사용할 수 없지만 false 일 때는 사용가능
var data = false;
data = data || 10; // data가 ""이면 10이 들어감
console.log(data);

// false : undefined, null, "", 0은 false로 취급
if(!undefined){
    console.log("undefined is false");
}

// === : 값과 타입이 모두 같으면 true
let data1;
console.log(data1 == undefined);
console.log(typeof(data1) == 'undefined');

console.log(1 == '1');
console.log(1 === '1');
console.log("1==true : " + (1 == true));
console.log("2==true : " + (2 == true));
console.log("1===true : " + (1 === true));