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

  const transactionRequest: TransactionRequest = {
    date: dateTransaction,
    typeTransaction: TypeTransactionRequest[typeTransactionString],
    value: valueTransaction,
  };
  console.log(transactionRequest)
  const errors = checkErrors(transactionRequest);
  if (errors != "") {
    const msgErrors: string = `Favor preencher ${errors} corretamente.`;
    alert(msgErrors);
    return;
  }

  const newTransaction: Transaction = {
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
