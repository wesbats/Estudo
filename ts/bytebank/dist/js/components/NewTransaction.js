import { TypeTransaction } from "../types/TypeTransaction.js";
import { checkErrors } from "../utils/newTransactionValidator.js";
import { AccountService } from "../service/AccountService.js";
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
    let transactionRequest = {
        date: dateTransaction,
        typeTransaction: TypeTransaction[typeTransactionString],
        value: valueTransaction,
    };
    const errors = checkErrors(transactionRequest);
    if (errors != "") {
        const msgErrors = `Favor preencher ${errors} corretamente.`;
        alert(msgErrors);
        return;
    }
    if (transactionRequest.typeTransaction == TypeTransaction.transfer ||
        transactionRequest.typeTransaction == TypeTransaction.paymentSlip) {
        transactionRequest.value *= -1;
    }
    const newTransaction = {
        date: transactionRequest.date,
        typeTransaction: transactionRequest.typeTransaction,
        value: transactionRequest.value,
    };
    accountService.atualizaSaldo(newTransaction.value);
    console.log(newTransaction);
});
