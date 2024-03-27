const accountBalanceDisplay = document.querySelector(".saldo-valor .valor") as HTMLInputElement;
const dateDisplay = document.querySelector(".block-saldo time") as HTMLTimeElement;
const nameDisplay = document.querySelector(".block-central h2") as HTMLHeadingElement;

updateDate();
updateAccontBalanceDisplay();

function updateAccontBalanceDisplay(): void {
  if (accountBank) {
    const accountBalance: number = accountBank.getAccountBalance();
    accountBalanceDisplay.innerText = formatCurrency(accountBalance);
  }
}
function updateDate() {
  const currentDay = new Date();
  dateDisplay.innerText = formatDate(currentDay, DateFormat.diaSemanaData);
}
function updateNameDisplay() {
  nameDisplay.innerText = accountBank.getNameOwner();
}
