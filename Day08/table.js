const button = document.getElementById("confirm");
var tr_temp;
var text_temp;


button.onclick = confirm;

function confirm(){
    console.log("confirm button pressed");
    const input = document.getElementById("input");
    const trs = document.querySelectorAll("tbody tr");
    var check = false;

    if(tr_temp){
        tr_temp.firstElementChild.innerHTML = text_temp;
    }
    trs.forEach((tr)=>{
        let td = tr.firstElementChild;
        tr.style.background = "#ffffff";

        if(input.value == td.innerHTML){
            tr_temp = tr;
            text_temp = td.innerHTML;
            td.innerHTML = "***" + td.innerHTML;
            tr.style.background = "#ef5350";
            check = true;
        }
    });

    if(check == false){
        alert("try again");
    }
}