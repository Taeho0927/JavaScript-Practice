const input = document.querySelector("input[name='pw']");
const div = document.getElementById("toggle");
const img = document.getElementById("img");
const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const result = document.getElementById("result");
const wrap = document.querySelector("div.wrap");

input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){ // 13번은 엔터키의 키코드
        SuperCar.enginestart();
    }
});

onBtn.addEventListener('click', function(){
    SuperCar.enginestart();
});

offBtn.addEventListener('click', function(){
    SuperCar.engineStop();
});

div.addEventListener("click",function(){
    let type = input.getAttribute('type');
    console.log('toggle pressed');
    if(type == 'password'){
        input.setAttribute('type','text');
        div.style.backgroundImage = "url('img/eye.jpg')";
    }
    else{
        input.setAttribute('type','password');
        div.style.backgroundImage = "url('img/noeye.jpg')";
    }
});

function SuperCar(){
    this.pw = "0000";
}

// prototype
// 객체를 만들지 않고 전체 객체에 공유
// 메서드의 경우에는 사용하지 않음
SuperCar.prototype.pw = prompt("초기 비밀번호 등록");
var isStart = false;
var errCount = 0;

SuperCar.enginestart = function(){
    console.log("Engine Start");
    if(isStart == true){
        result.innerHTML = "이미 동작중";
        return;
    }
    if(SuperCar.prototype.pw == input.value){
        wrap.style.visibility = "hidden";
        input.value = null;
        img.style.background = "url(img/시동켜기.gif)";
        isStart = true;
        result.innerHTML = "동작중";
    }
    else{
        errCount++;
        result.innerHTML = "비밀번호 오류" + errCount+"회";
        if(errCount == 3){
            wrap.style.visibility = 'hidden';
            setTimeout(function(){
                img.style.backgroundImage = "url('img/경찰.png')";
                onBtn.style.display = "none";
                offBtn.style.display = "none";
                result.innerHTML = "경찰 출동";
            },2000);
        }
    }

    SuperCar.engineStop = function(){
        if(isStart == false){
            result.innerHTML = "이미 정지상태";
            return;
        }
        img.style.backgroundImage = "url('img/시동끄기.gif')";
        isStart = false;
        result.innerHTML = "시동이 꺼집니다.";
        wrap.style.visibility = "visible";
    }
}