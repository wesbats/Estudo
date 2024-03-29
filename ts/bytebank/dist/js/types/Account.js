import { formatDate } from "../utils/formatter.js";
import DateFormat from "./DateFormat.js";
export class AccountBank {
    constructor(name, accountBalance = 0) {
        this.listTransactions = {};
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
        const date = formatDate(transaction.date, DateFormat.mesAno);
        const key = this.listTransactions[date];
        if (key == undefined) {
            this.listTransactions[date] = [transaction];
        }
        else {
            this.listTransactions[date].push(transaction);
        }
        this.listTransactions.array.forEach((element) => {
            console.log(element);
        });
        this.accountBalance += transaction.value;
    }
    getTransactions() {
        return this.listTransactions;
    }
}
export default AccountBank;
