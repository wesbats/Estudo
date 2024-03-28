import Transaction from "./Transaction";

export class AccountBank {
  private nameOwner: string;
  private accountBalance: number;
  private listTransactions: Transaction[] = [];

  constructor(accountBalanceStarter: number, name: string) {
    this.accountBalance = accountBalanceStarter;
    this.nameOwner = name;
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
