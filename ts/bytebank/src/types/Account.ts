import { formatDate } from "../utils/formatter.js";
import DateFormat from "./DateFormat.js";
import Transaction from "./Transaction.js";

export class AccountBank {
  private nameOwner: string;
  private accountBalance: number;
  private listTransactions = {} as Dictionary<Transaction[]>;

  constructor(name: string, accountBalance: number = 0) {
    this.nameOwner = name;
    this.accountBalance = accountBalance;
  }

  getAccountBalance(): number {
    return this.accountBalance;
  }
  getNameOwner(): string {
    return this.nameOwner;
  }

  addTransaction(transaction: Transaction): void {
    const date = formatDate(transaction.date, DateFormat.mesAno);
    const key = this.listTransactions[date];
    if (key == undefined) {
      this.listTransactions[date] = [transaction];
    } else {
      this.listTransactions[date].push(transaction);
    }
    this.listTransactions.array.forEach((element) => {
      console.log(element);
    });
    this.accountBalance += transaction.value;
  }
  getTransactions(): Dictionary<Transaction[]> {
    return this.listTransactions;
  }
}

export default AccountBank;
