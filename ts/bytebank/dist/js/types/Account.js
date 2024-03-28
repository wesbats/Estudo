export class AccountBank {
    constructor(name, accountBalance = 0) {
        this.listTransactions = [];
        this.nameOwner = name;
        this.accountBalance = accountBalance;
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
