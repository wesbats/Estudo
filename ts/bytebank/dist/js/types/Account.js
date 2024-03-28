export class AccountBank {
    constructor(accountBalanceStarter, name) {
        this.accountBalance = accountBalanceStarter;
        this.nameOwner = name;
    }
    getAccountBalance() {
        return this.accountBalance;
    }
    getNameOwner() {
        return this.nameOwner;
    }
    accountBalanceUpdate(amountMoney) {
        this.accountBalance += amountMoney;
    }
}
