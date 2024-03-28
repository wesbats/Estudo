import { AccountService } from "../service/AccountService.js";
import { DateFormat } from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";

const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;
const accountService: AccountService = new AccountService();

function updateDate() {
  const currentDay = new Date();
  dateDisplay.innerText = formatDate(currentDay, DateFormat.diaSemanaData);
}
function updateNameDisplay() {
  nameDisplay.innerText = accountService.getNameOwner();
}

export function updateAccontBalanceDisplay(): void {
  if (accountBalanceDisplay && accountService.accountIsValid()) {
    accountBalanceDisplay.innerText = formatCurrency(accountService.getAccountBalance());
  }
}
export function startDisplay() {
  updateAccontBalanceDisplay();
  updateDate();
  updateNameDisplay();
}
