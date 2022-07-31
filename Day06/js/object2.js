var account = new Object();
account.owenr = "이선생";
account.balance = 90;
account.deposit = deposit;
account.withdraw = withdraw;

function deposit(money){
    this.balance += money;
}
function withdraw(money){
    if(this.balance >= money){
        this.balance -= money;
        return money;
    }
    else {
        var real_money = this.balance;
        this.balance = 0;
        return real_money;
    }
}
account.deposit(50000);
console.log(account.balance);
console.log("10만원 인출 시도 : 인출금액(" + account.withdraw(100000)+")");
console.log("잔액 : "+account.balance);