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
        if (transaction.typeTransaction === undefined) {
            listErrors.push("Tipo de transação");
        }
        if (transaction.value == 0) {
            listErrors.push("Valor");
        }
        else {
            const decimalPart = String(transaction.value).split(".")[1];
            if ((decimalPart === null || decimalPart === void 0 ? void 0 : decimalPart.length) > 2) {
                listErrors.push("Valor");
            }
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
export default checkErrors;
