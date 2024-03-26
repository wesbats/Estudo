class AccountBank {
  private accountBalance: number;

  constructor(accountBalanceStarter: number) {
    this.accountBalance = accountBalanceStarter;
  }

  getAccountBalance() {
    return this.accountBalance;
  }

  updateAccountBalance(updatedAccountBalance: number) {
    this.accountBalance = updatedAccountBalance;
  }
}
