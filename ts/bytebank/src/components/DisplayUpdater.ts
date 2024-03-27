import { accountBank } from "../main.js";
import { DateFormat } from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";

const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;

function updateDate() {
  const currentDay = new Date();
  dateDisplay.innerText = formatDate(currentDay, DateFormat.diaSemanaData);
}
function updateNameDisplay() {
  nameDisplay.innerText = accountBank.getNameOwner();
}

export function updateAccontBalanceDisplay(): void {
  if (accountBank) {
    const accountBalance: number = accountBank.getAccountBalance();
    accountBalanceDisplay.innerText = formatCurrency(accountBalance);
  }
}
export function startDisplay() {
  updateAccontBalanceDisplay();
  updateDate();
  updateNameDisplay();
}
