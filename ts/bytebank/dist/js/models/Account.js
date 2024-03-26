class AccountBank {
    constructor(accountBalanceStarter) {
        this.accountBalance = accountBalanceStarter;
    }
    getAccountBalance() {
        return this.accountBalance;
    }
    accountBalanceAdd(amountMoney) {
        this.accountBalance += amountMoney;
    }
    accountBalanceRemove(amountMoney) {
        this.accountBalance -= amountMoney;
    }
}
