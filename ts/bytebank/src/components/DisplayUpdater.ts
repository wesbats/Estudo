const accountBalanceDisplay = document.querySelector(
  ".saldo-valor .valor"
) as HTMLInputElement;
const dateDisplay = document.querySelector(
  ".block-saldo time"
) as HTMLTimeElement;
const nameDisplay = document.querySelector(
  ".block-central h2"
) as HTMLHeadingElement;

updateDate();
updateAccontBalanceDisplay();

function updateAccontBalanceDisplay(): void {
  if (accountBank) {
    const accountBalance: number = accountBank.getAccountBalance();
    accountBalanceDisplay.innerText = accountBalance.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}
function updateDate() {
  const currentDay = new Date();
  dateDisplay.innerText = currentDay.toLocaleDateString("pt-br", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
function updateNameDisplay() {
  nameDisplay.innerText = accountBank.getNameOwner();
}
