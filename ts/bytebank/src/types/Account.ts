export class AccountBank {
  private nameOwner: string;
  private accountBalance: number;

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

  accountBalanceUpdate(amountMoney: number): void {
    this.accountBalance += amountMoney;
  }
}
