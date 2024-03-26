//variaveis
let accountBalance = 3000;
const accountBalanceDisplay = document.querySelector(".saldo-valor .valor");
const transactionForm = document.querySelector(".block-nova-transacao form");
//inicializador
updateAccontBalanceDisplay();
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
    let typeTransaction = inputTypeTransactionForm === null || inputTypeTransactionForm === void 0 ? void 0 : inputTypeTransactionForm.value;
    let valueTransaction = Number(inputValueTransactionForm === null || inputValueTransactionForm === void 0 ? void 0 : inputValueTransactionForm.value);
    let listErrors = checkValues();
    if (listErrors.length != 0) {
        let errors = "Error";
        listErrors.forEach(formatErrors);
        let msgErrors = `Favor preencher ${errors} corretamente.`;
        alert(msgErrors);
        return;
        function formatErrors(value, index) {
            if (index == 0) {
                errors = value;
                return;
            }
            if (index + 1 == listErrors.length) {
                errors += ` e ${value}`;
                return;
            }
            errors += `, ${value}`;
        }
    }
    switch (typeTransaction) {
        case "Depósito":
            accountBalance += valueTransaction;
            break;
        case "Transferência":
            accountBalance -= valueTransaction;
            break;
        case "Pagamento de Boleto":
            accountBalance -= valueTransaction;
            break;
    }
    updateAccontBalanceDisplay();
    const newTransaction = {
        date: dateTransaction,
        typeTransaction: typeTransaction,
        value: valueTransaction,
    };
    console.log(newTransaction);
    function checkValues() {
        let listErrors = [];
        if (typeTransaction == "") {
            listErrors.push("Tipo de transação");
        }
        if (valueTransaction == 0) {
            listErrors.push("Valor");
        }
        if (isInvalidDate(dateTransaction)) {
            listErrors.push("Data");
        }
        return listErrors;
    }
});
//funcoes
function updateAccontBalanceDisplay() {
    if (accountBalance) {
        accountBalanceDisplay.innerText = `R$ ${accountBalance}`;
    }
}
function isInvalidDate(dateCheck) {
    return isNaN(dateCheck.getTime());
}
