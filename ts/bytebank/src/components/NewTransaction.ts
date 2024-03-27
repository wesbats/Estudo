import { accountBank } from "../main.js";
import { Transaction } from "../types/Transaction.js";
import { TypeTransaction } from "../types/TypeTransaction.js";
import { updateAccontBalanceDisplay } from "./DisplayUpdater.js";
import { checkErrors } from "../utils/newTransactionValidator.js";

const transactionForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!transactionForm) {
    alert("Erro inesperado, favor recarregar a página.");
    return;
  }

  const inputDateTransactionForm = transactionForm.querySelector("#data") as HTMLDataElement;
  const inputTypeTransactionForm = transactionForm.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;
  const inputValueTransactionForm = transactionForm.querySelector("#valor") as HTMLInputElement;

  let dateTransaction: Date = new Date(inputDateTransactionForm?.value);
  let typeTransactionString: string = inputTypeTransactionForm?.value;
  let valueTransaction: number = Number(inputValueTransactionForm?.value);

  const newTransaction: Transaction = {
    date: dateTransaction,
    typeTransaction: TypeTransaction[typeTransactionString],
    value: valueTransaction,
  };

  const errors = checkErrors(newTransaction);
  if (errors != "") {
    const msgErrors: string = `Favor preencher ${errors} corretamente.`;
    alert(msgErrors);
    return;
  }

  console.log(newTransaction);

  switch (newTransaction.typeTransaction) {
    case TypeTransaction.deposit:
      accountBank.accountBalanceAdd(newTransaction.value);
      break;
    case TypeTransaction.transfer:
      accountBank.accountBalanceRemove(newTransaction.value);
      break;
    case TypeTransaction.paymentSlip:
      accountBank.accountBalanceRemove(newTransaction.value);
      break;
  }
  updateAccontBalanceDisplay();
});
