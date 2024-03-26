const transactionForm = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!transactionForm) {
    alert("Erro inesperado, favor recarregar a página.");
    return;
  }

  const inputDateTransactionForm = transactionForm.querySelector(
    "#data"
  ) as HTMLDataElement;
  const inputTypeTransactionForm = transactionForm.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;
  const inputValueTransactionForm = transactionForm.querySelector(
    "#valor"
  ) as HTMLInputElement;

  let dateTransaction: Date = new Date(inputDateTransactionForm?.value);
  let typeTransactionString: string = inputTypeTransactionForm?.value;
  let valueTransaction: number = Number(inputValueTransactionForm?.value);

  let listErrors: string[] = checkValues();

  if (listErrors.length != 0) {
    let errors: string = "Error";
    listErrors.forEach(formatErrors);

    let msgErrors: string = `Favor preencher ${errors} corretamente.`;
    alert(msgErrors);
    return;

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

  switch (typeTransactionString) {
    case TypeTransaction.deposit:
      accountBalance += valueTransaction;
      break;
    case TypeTransaction.transfer:
      accountBalance -= valueTransaction;
      break;
    case TypeTransaction.paymentSlip:
      accountBalance -= valueTransaction;
      break;
  }
  updateAccontBalanceDisplay();

  const newTransaction: Transaction = {
    date: dateTransaction,
    typeTransaction: TypeTransaction[typeTransactionString],
    value: valueTransaction,
  };
  console.log(newTransaction);
});
