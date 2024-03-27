const accountBalanceDisplay = document.querySelector(
  ".saldo-valor .valor"
) as HTMLInputElement;
updateAccontBalanceDisplay();

function updateAccontBalanceDisplay(): void {
  if (accountBank) {
    const accountBalance: number = accountBank.getAccountBalance();
    accountBalanceDisplay.innerText = `R$ ${accountBalance.toFixed(2)}`;
  }
}
