import DateFormat from "../types/DateFormat.js";
import { formatCurrency, formatDate } from "../utils/formatter.js";
// header display
const divUser = document.querySelector(".usuario");
const nameHeader = divUser.querySelector("span");
const nameAltImg = divUser.querySelector("img");
// main display
const display = document.querySelector(".block-saldo");
const accountBalanceDisplay = display.querySelector(".valor");
const dateDisplay = display.querySelector("time");
const nameDisplay = display.querySelector("h2");
// aside display
const transactionsDisplay = document.querySelector(".registro-transacoes");
function updateDate(date) {
    dateDisplay.innerText = formatDate(date, DateFormat.diaSemanaData);
}
function updateNameDisplay(name) {
    nameDisplay.innerText = "Olá, " + name;
    nameHeader.innerText = name;
    nameAltImg.setAttribute("alt", name);
}
function updateExtractDisplay(transactions) {
    let groupTransaction = "";
    for (let group of transactions) {
        let extractMounth = "";
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
function updateAccontBalanceDisplay(accountBalance) {
    if (accountBalanceDisplay) {
        accountBalanceDisplay.innerText = formatCurrency(accountBalance);
    }
}
function startDisplay(accountBalance, date, name, transactions) {
    updateAccontBalanceDisplay(accountBalance);
    updateDate(date);
    updateNameDisplay(name);
    updateExtractDisplay(transactions);
}
const Display = {
    start(accountBalance, date, name, transactions) {
        startDisplay(accountBalance, date, name, transactions);
    },
    update(accountBalance, transactions) {
        updateAccontBalanceDisplay(accountBalance);
        updateExtractDisplay(transactions);
    },
};
export default Display;
