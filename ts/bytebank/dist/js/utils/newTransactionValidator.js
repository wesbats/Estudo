function checkErrors(transactionRequest) {
    let listErrors = checkValues(transactionRequest);
    let errors = "";
    if (listErrors.length != 0) {
        listErrors.forEach(formatErrors);
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
    return errors;
    function checkValues(transaction) {
        let listErrors = [];
        let isInvalidType = true;
        for (let key in TypeTransactionRequest) {
            if (TypeTransactionRequest[key] === transaction.typeTransaction) {
                isInvalidType = false;
                break;
            }
        }
        if (isInvalidType) {
            listErrors.push("Tipo de transação");
        }
        if (transaction.value == 0) {
            listErrors.push("Valor");
        }
        if (isInvalidDate(transaction.date)) {
            listErrors.push("Data");
        }
        return listErrors;
        function isInvalidDate(dateCheck) {
            return isNaN(dateCheck.getTime());
        }
    }
}
