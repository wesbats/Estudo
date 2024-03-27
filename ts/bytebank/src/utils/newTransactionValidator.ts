function checkErrors(transactionRequest: TransactionRequest) {
  let listErrors: string[] = checkValues(transactionRequest);
  let errors: string = "";

  if (listErrors.length != 0) {
    listErrors.forEach(formatErrors);

    function formatErrors(value: string, index: number): void {
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

  function checkValues(transaction: TransactionRequest): string[] {
    let listErrors: string[] = [];
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

    function isInvalidDate(dateCheck: Date): boolean {
      return isNaN(dateCheck.getTime());
    }
  }
}
