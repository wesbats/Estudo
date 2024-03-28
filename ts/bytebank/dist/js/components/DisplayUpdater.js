import AccountService from "../service/AccountService.js";
import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
const display = document.querySelector(".block-saldo");
const accountBalanceDisplay = display.querySelector(".valor");
const dateDisplay = display.querySelector("time");
const nameDisplay = display.querySelector("h2");
const divUser = document.querySelector(".usuario");
const nameHeader = divUser.querySelector("span");
const nameAltImg = divUser.querySelector("img");
const accountService = new AccountService();
function updateDate() {
    dateDisplay.innerText = formatDate(accountService.getDate(), DateFormat.diaSemanaData);
}
function updateNameDisplay() {
    const name = accountService.getNameOwner();
    nameDisplay.innerText = name;
    nameHeader.innerText = name;
    nameAltImg.setAttribute("alt", name);
}
export function updateAccontBalanceDisplay() {
    if (accountBalanceDisplay && accountService.accountIsValid()) {
        accountBalanceDisplay.innerText = formatCurrency(accountService.getAccountBalance());
        console.log("oi");
    }
    console.log("tchau");
}
export function startDisplay() {
    updateAccontBalanceDisplay();
    updateDate();
    updateNameDisplay();
}
