import Transaction from "./Transaction";

export class AccountBank {
  private nameOwner: string;
  private accountBalance: number;
  private listTransactions: Transaction[] = [];

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
    this.listTransactions.push(transaction);
    this.accountBalance += transaction.value;
  }
  getTransactions(): Transaction[] {
    return this.listTransactions;
  }
}

export default AccountBank;
