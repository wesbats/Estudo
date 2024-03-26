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
    const transactionRequest = {
        date: dateTransaction,
        typeTransaction: TypeTransactionRequest[typeTransactionString],
        value: valueTransaction,
    };
    console.log(transactionRequest);
    const errors = checkErrors(transactionRequest);
    if (errors != "") {
        const msgErrors = `Favor preencher ${errors} corretamente.`;
        alert(msgErrors);
        return;
    }
    const newTransaction = {
        date: transactionRequest.date,
        typeTransaction: TypeTransaction[transactionRequest.typeTransaction],
        value: transactionRequest.value,
    };
    console.log(newTransaction);
    switch (typeTransactionString) {
        case TypeTransaction.deposit:
            accountBank.accountBalanceAdd(valueTransaction);
            break;
        case TypeTransaction.transfer:
            accountBank.accountBalanceRemove(valueTransaction);
            break;
        case TypeTransaction.paymentSlip:
            accountBank.accountBalanceRemove(valueTransaction);
            break;
    }
    updateAccontBalanceDisplay();
});
