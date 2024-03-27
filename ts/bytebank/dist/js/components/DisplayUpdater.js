import { accountBank } from "../main.js";
import { DateFormat } from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
const display = document.querySelector(".block-saldo");
const accountBalanceDisplay = display.querySelector(".valor");
const dateDisplay = display.querySelector("time");
const nameDisplay = display.querySelector("h2");
function updateDate() {
    const currentDay = new Date();
    dateDisplay.innerText = formatDate(currentDay, DateFormat.diaSemanaData);
}
function updateNameDisplay() {
    nameDisplay.innerText = accountBank.getNameOwner();
}
export function updateAccontBalanceDisplay() {
    if (accountBank) {
        const accountBalance = accountBank.getAccountBalance();
        accountBalanceDisplay.innerText = formatCurrency(accountBalance);
    }
}
export function startDisplay() {
    updateAccontBalanceDisplay();
    updateDate();
    updateNameDisplay();
}
