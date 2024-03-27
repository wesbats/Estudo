const accountBalanceDisplay = document.querySelector(".saldo-valor .valor");
const dateDisplay = document.querySelector(".block-saldo time");
const nameDisplay = document.querySelector(".block-central h2");
updateDate();
updateAccontBalanceDisplay();
function updateAccontBalanceDisplay() {
    if (accountBank) {
        const accountBalance = accountBank.getAccountBalance();
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
