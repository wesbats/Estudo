//variaveis
var accountBalance = 3000;
var accountBalanceDisplay = document.querySelector(".saldo-valor .valor");
var transactionForm = document.querySelector(".block-nova-transacao form");
//inicializador
updateAccontBalanceDisplay();
transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!transactionForm) {
        alert("Erro inesperado, favor recarregar a página.");
        return;
    }
    var inputDateTransactionForm = transactionForm.querySelector("#data");
    var inputTypeTransactionForm = transactionForm.querySelector("#tipoTransacao");
    var inputValueTransactionForm = transactionForm.querySelector("#valor");
    var dateTransaction = new Date(inputDateTransactionForm === null || inputDateTransactionForm === void 0 ? void 0 : inputDateTransactionForm.value);
    var typeTransaction = inputTypeTransactionForm === null || inputTypeTransactionForm === void 0 ? void 0 : inputTypeTransactionForm.value;
    var valueTransaction = Number(inputValueTransactionForm === null || inputValueTransactionForm === void 0 ? void 0 : inputValueTransactionForm.value);
    var listErrors = checkValues();
    if (listErrors.length != 0) {
        var errors_1 = "Error";
        listErrors.forEach(formatErrors);
        var msgErrors = "Favor preencher ".concat(errors_1, " corretamente.");
        alert(msgErrors);
        return;
        function formatErrors(value, index) {
            if (index == 0) {
                errors_1 = value;
                return;
            }
            if (index + 1 == listErrors.length) {
                errors_1 += " e ".concat(value);
                return;
            }
            errors_1 += ", ".concat(value);
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
    var newTransaction = {
        date: dateTransaction,
        typeTransaction: typeTransaction,
        value: valueTransaction,
    };
    console.log(newTransaction);
    function checkValues() {
        var listErrors = [];
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
        accountBalanceDisplay.innerText = "R$ ".concat(accountBalance);
    }
}
function isInvalidDate(dateCheck) {
    return isNaN(dateCheck.getTime());
}
