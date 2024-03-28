import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
const display = document.querySelector(".block-saldo");
const accountBalanceDisplay = display.querySelector(".valor");
const dateDisplay = display.querySelector("time");
const nameDisplay = display.querySelector("h2");
const divUser = document.querySelector(".usuario");
const nameHeader = divUser.querySelector("span");
const nameAltImg = divUser.querySelector("img");
function updateDate(date) {
    dateDisplay.innerText = formatDate(date, DateFormat.diaSemanaData);
}
function updateNameDisplay(name) {
    nameDisplay.innerText = name;
    nameHeader.innerText = name;
    nameAltImg.setAttribute("alt", name);
}
export function updateAccontBalanceDisplay(accountBalance) {
    if (accountBalanceDisplay) {
        accountBalanceDisplay.innerText = formatCurrency(accountBalance);
    }
}
export function startDisplay(accountBalance, date, name) {
    updateAccontBalanceDisplay(accountBalance);
    updateDate(date);
    updateNameDisplay(name);
}
