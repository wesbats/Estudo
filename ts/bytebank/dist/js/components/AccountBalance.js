const accountBalanceDisplay = document.querySelector(".saldo-valor .valor");
updateAccontBalanceDisplay();
function updateAccontBalanceDisplay() {
    if (accountBank) {
        const accountBalance = accountBank.getAccountBalance();
        accountBalanceDisplay.innerText = `R$ ${accountBalance.toFixed(2)}`;
    }
}
