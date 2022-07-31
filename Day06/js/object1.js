var account = {
    owenr:"이선생", code :"2132", balance:982632392
    , deposit : function(money){this.balance += money;}
    , withdraw: function(money){this.balance -= money;}
    , show_balance: function(){return this.balance;}
}

with(console){
    log(account);
    log(account.owenr);
    log(account['owenr']);
    account.deposit(50000);
    log(account.show_balance());
}