import { formatDate } from "../utils/formatter.js";
import DateFormat from "./DateFormat.js";
export class AccountBank {
    constructor(name, accountBalance = 0, transactions = []) {
        this.nameOwner = name;
        this.accountBalance = accountBalance;
        this.listTransactions = transactions;
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
    getGroupTransactions() {
        const groupTransactions = [];
        const transactions = structuredClone(this.listTransactions).sort((t1, t2) => t2.date.getTime() - t1.date.getTime());
        let labelGroup = "";
        for (let transaction of transactions) {
            let labelTransaction = formatDate(transaction.date, DateFormat.mesAno);
            if (labelGroup != labelTransaction) {
                labelGroup = labelTransaction;
                groupTransactions.push({ label: labelGroup, transactions: [] });
            }
            groupTransactions[groupTransactions.length - 1].transactions.push(transaction);
        }
        return groupTransactions;
    }
}
export default AccountBank;
