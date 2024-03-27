import { Transaction } from "../types/Transaction.js";

export function checkErrors(transactionRequest: Transaction) {
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

  function checkValues(transaction: Transaction): string[] {
    let listErrors: string[] = [];
    if (transaction.typeTransaction === undefined) {
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
