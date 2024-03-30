import { formatDate } from "../utils/formatter.js";
import DateFormat from "./DateFormat.js";
import GroupTransaction from "./GroupTransaction.js";
import Transaction from "./Transaction.js";

export class AccountBank {
  private nameOwner: string;
  private accountBalance: number;
  private listTransactions: Transaction[];

  constructor(name: string, accountBalance: number = 0, transactions: Transaction[] = []) {
    this.nameOwner = name;
    this.accountBalance = accountBalance;
    this.listTransactions = transactions;
  }

  getAccountBalance(): number {
    return this.accountBalance;
  }
  getNameOwner(): string {
    return this.nameOwner;
  }

  addTransaction(transaction: Transaction): void {
    this.listTransactions.push(transaction);
    this.accountBalance += transaction.value;
  }
  getTransactions(): Transaction[] {
    return this.listTransactions;
  }
  getGroupTransactions(): GroupTransaction[] {
    const groupTransactions: GroupTransaction[] = [];
    const transactions = structuredClone(this.listTransactions).sort(
      (t1, t2) => t2.date.getTime() - t1.date.getTime()
    );
    let labelGroup: string = "";

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
