const accountBalanceDisplay = document.querySelector(".saldo-valor .valor");
const dateDisplay = document.querySelector(".block-saldo time");
const nameDisplay = document.querySelector(".block-central h2");
updateDate();
updateAccontBalanceDisplay();
function updateAccontBalanceDisplay() {
    if (accountBank) {
        const accountBalance = accountBank.getAccountBalance();
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
