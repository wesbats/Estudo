import DateFormat from "../types/DateFormat.js";
import GroupTransaction from "../types/GroupTransaction.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";

// header display
const divUser = document.querySelector(".usuario") as HTMLDivElement;
const nameHeader = divUser.querySelector("span") as HTMLSpanElement;
const nameAltImg = divUser.querySelector("img") as HTMLImageElement;
// main display
const display = document.querySelector(".block-saldo") as HTMLTableSectionElement;
const accountBalanceDisplay = display.querySelector(".valor") as HTMLInputElement;
const dateDisplay = display.querySelector("time") as HTMLTimeElement;
const nameDisplay = display.querySelector("h2") as HTMLHeadingElement;
// aside display
const transactionsDisplay = document.querySelector(".registro-transacoes") as HTMLDivElement;

function updateDate(date: Date) {
  dateDisplay.innerText = formatDate(date, DateFormat.diaSemanaData);
}
function updateNameDisplay(name: string) {
  nameDisplay.innerText = "Olá, " + name;
  nameHeader.innerText = name;
  nameAltImg.setAttribute("alt", name);
}

function updateExtractDisplay(transactions: GroupTransaction[]): void {
  let groupTransaction: string = "";
  for (let group of transactions) {
    let extractMounth: string = "";
    for (let transaction of group.transactions) {
      extractMounth += `
      <div class="transacao-item">
        <div class="transacao-info">
          <span class="tipo">${transaction.typeTransaction}</span>
          <strong class="valor">${formatCurrency(transaction.value)}</strong>
        </div>
        <time class="data">${formatDate(transaction.date, DateFormat.diaMes)}</time>
      </div>`;
    }
    groupTransaction += `
    <div class="registro-transacoes">
      <div class="transacoes-group">
        <strong class="mes-group">${group.label[0].toUpperCase() + group.label.slice(1)}</strong>
        ${extractMounth}
      </div>
    </div>`;
  }
  if (groupTransaction == "") {
    transactionsDisplay.innerHTML = `<div>Não há transações registradas</div>`;
    return;
  }
  transactionsDisplay.innerHTML = groupTransaction;
}
function updateAccontBalanceDisplay(accountBalance: number): void {
  if (accountBalanceDisplay) {
    accountBalanceDisplay.innerText = formatCurrency(accountBalance);
  }
}
function startDisplay(accountBalance: number, date: Date, name: string, transactions: GroupTransaction[]) {
  updateAccontBalanceDisplay(accountBalance);
  updateDate(date);
  updateNameDisplay(name);
  updateExtractDisplay(transactions);
}

const Display = {
  start(accountBalance: number, date: Date, name: string, transactions: GroupTransaction[]) {
    startDisplay(accountBalance, date, name, transactions);
  },
  update(accountBalance: number, transactions: GroupTransaction[]) {
    updateAccontBalanceDisplay(accountBalance);
    updateExtractDisplay(transactions);
  },
};

export default Display;
