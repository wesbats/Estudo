import { accountBank } from "../main.js";
import { TypeTransaction } from "../types/TypeTransaction.js";
import { updateAccontBalanceDisplay } from "./DisplayUpdater.js";
import { checkErrors } from "../utils/newTransactionValidator.js";
const transactionForm = document.querySelector(".block-nova-transacao form");
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
    const newTransaction = {
        date: dateTransaction,
        typeTransaction: TypeTransaction[typeTransactionString],
        value: valueTransaction,
    };
    const errors = checkErrors(newTransaction);
    if (errors != "") {
        const msgErrors = `Favor preencher ${errors} corretamente.`;
        alert(msgErrors);
        return;
    }
    console.log(newTransaction);
    switch (newTransaction.typeTransaction) {
        case TypeTransaction.deposit:
            accountBank.accountBalanceAdd(newTransaction.value);
            break;
        case TypeTransaction.transfer:
            accountBank.accountBalanceRemove(newTransaction.value);
            break;
        case TypeTransaction.paymentSlip:
            accountBank.accountBalanceRemove(newTransaction.value);
            break;
    }
    updateAccontBalanceDisplay();
});
