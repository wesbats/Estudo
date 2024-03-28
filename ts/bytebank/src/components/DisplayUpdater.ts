import AccountService from "../service/AccountService.js";
import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";

const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;
const divUser = document.querySelector(".usuario") as HTMLDivElement;
const nameHeader = divUser.querySelector("span") as HTMLSpanElement;
const nameAltImg = divUser.querySelector("img") as HTMLImageElement;
const accountService: AccountService = new AccountService();

function updateDate() {
  dateDisplay.innerText = formatDate(accountService.getDate(), DateFormat.diaSemanaData);
}
function updateNameDisplay() {
  const name: string = accountService.getNameOwner();
  nameDisplay.innerText = name;
  nameHeader.innerText = name;
  nameAltImg.setAttribute("alt", name);
}

export function updateAccontBalanceDisplay(): void {
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
