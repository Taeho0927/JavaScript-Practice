const btns = document.querySelectorAll("button.btn");
const banner = document.querySelector("div.banner");
const arrows = document.querySelectorAll("div.arrow");
var count = 0;

btns.forEach(function(value, index, ar){
    ar[index].addEventListener("click",function(){
        count = index;
        banner.style.transform = "translate(-"+ count*90+"vw)";
    });
});
// 이전, 다음 버튼
arrows.forEach((arrow) => {
    arrow.addEventListener("click", function(){
        let arrowtype = arrow.classList[1];
        if(arrowtype == 'prev' && count != 0){
            count--;
        }else if(arrowtype == 'next' && count != btns.length-1){
            count++;
        }
        banner.style.transform = "translate(-"+ count*90+"vw)";
    });
});

var time = setInterval(function(){
    if(count == 5){
        count = 0;
    }
    else{
        count++;
    }
    banner.style.transform = "translate(-"+ count*90+"vw)";
},3000);