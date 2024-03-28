import AccountService from "../service/AccountService.js";
import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
import { repo } from "../service/AccountService.js";

const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;
const accountService: AccountService = new AccountService();

function updateDate() {
  dateDisplay.innerText = formatDate(repo.date, DateFormat.diaSemanaData);
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
