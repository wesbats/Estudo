//variaveis
let accountBalance: number = 3000;
const accountBalanceDisplay = document.querySelector(
  ".saldo-valor .valor"
) as HTMLInputElement;
const transactionForm = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

//inicializador
updateAccontBalanceDisplay();
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
  let typeTransaction: string = inputTypeTransactionForm?.value;
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

  function checkValues(): string[] {
    let listErrors: string[] = [];
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
function updateAccontBalanceDisplay(): void {
  if (accountBalance) {
    accountBalanceDisplay.innerText = `R$ ${accountBalance}`;
  }
}

function isInvalidDate(dateCheck: Date): boolean {
  return isNaN(dateCheck.getTime());
}
