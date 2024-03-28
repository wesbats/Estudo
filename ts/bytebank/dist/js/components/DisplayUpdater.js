import { AccountService } from "../service/AccountService.js";
import { DateFormat } from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
const display = document.querySelector(".block-saldo");
const accountBalanceDisplay = display.querySelector(".valor");
const dateDisplay = display.querySelector("time");
const nameDisplay = display.querySelector("h2");
const accountService = new AccountService();
function updateDate() {
    const currentDay = new Date();
    dateDisplay.innerText = formatDate(currentDay, DateFormat.diaSemanaData);
}
function updateNameDisplay() {
    nameDisplay.innerText = accountService.getNameOwner();
}
export function updateAccontBalanceDisplay() {
    if (accountBalanceDisplay && accountService.accountIsValid()) {
        accountBalanceDisplay.innerText = formatCurrency(accountService.getAccountBalance());
    }
}
export function startDisplay() {
    updateAccontBalanceDisplay();
    updateDate();
    updateNameDisplay();
}
