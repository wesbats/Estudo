import AccountService from "../service/AccountService.js";
import TypeTransaction from "../types/TypeTransaction.js";
const transactionForm = document.querySelector(".block-nova-transacao form");
const accountService = new AccountService();
transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!transactionForm) {
        alert("Erro inesperado, favor recarregar a página.");
        return;
    }
    const inputDateTransactionForm = transactionForm.querySelector("#data");
    const inputTypeTransactionForm = transactionForm.querySelector("#tipoTransacao");
    const inputValueTransactionForm = transactionForm.querySelector("#valor");
    let dateTransaction = new Date(inputDateTransactionForm === null || inputDateTransactionForm === void 0 ? void 0 : inputDateTransactionForm.value);
    let typeTransactionString = inputTypeTransactionForm === null || inputTypeTransactionForm === void 0 ? void 0 : inputTypeTransactionForm.value;
    let valueTransaction = Number(inputValueTransactionForm === null || inputValueTransactionForm === void 0 ? void 0 : inputValueTransactionForm.value);
    transactionForm.reset();
    const transactionRequest = {
        date: dateTransaction,
        typeTransaction: TypeTransaction[typeTransactionString],
        value: valueTransaction,
    };
    accountService.addTransaction(transactionRequest);
});
