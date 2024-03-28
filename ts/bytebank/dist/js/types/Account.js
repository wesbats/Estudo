export class AccountBank {
    constructor(accountBalanceStarter, name) {
        this.listTransactions = [];
        this.accountBalance = accountBalanceStarter;
        this.nameOwner = name;
    }
    getAccountBalance() {
        return this.accountBalance;
    }
    getNameOwner() {
        return this.nameOwner;
    }
    addTransaction(transaction) {
        this.listTransactions.push(transaction);
        this.accountBalance += transaction.value;
    }
    getTransactions() {
        return this.listTransactions;
    }
}
export default AccountBank;
