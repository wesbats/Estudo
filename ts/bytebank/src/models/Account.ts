class AccountBank {
  private accountBalance: number;

  constructor(accountBalanceStarter: number) {
    this.accountBalance = accountBalanceStarter;
  }

  getAccountBalance() {
    return this.accountBalance;
  }

  accountBalanceAdd(amountMoney: number) {
    this.accountBalance += amountMoney;
  }
  accountBalanceRemove(amountMoney: number) {
    this.accountBalance -= amountMoney;
  }
}
