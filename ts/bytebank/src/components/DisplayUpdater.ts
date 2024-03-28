import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";

const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;
const divUser = document.querySelector(".usuario") as HTMLDivElement;
const nameHeader = divUser.querySelector("span") as HTMLSpanElement;
const nameAltImg = divUser.querySelector("img") as HTMLImageElement;

function updateDate(date: Date) {
  dateDisplay.innerText = formatDate(date, DateFormat.diaSemanaData);
}
function updateNameDisplay(name: string) {
  nameDisplay.innerText = name;
  nameHeader.innerText = name;
  nameAltImg.setAttribute("alt", name);
}

export function updateAccontBalanceDisplay(accountBalance: number): void {
  if (accountBalanceDisplay) {
    accountBalanceDisplay.innerText = formatCurrency(accountBalance);
  }
}
export function startDisplay(accountBalance: number, date: Date, name: string) {
  updateAccontBalanceDisplay(accountBalance);
  updateDate(date);
  updateNameDisplay(name);
}
