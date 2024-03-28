import { Transaction } from "../types/Transaction.js";
import { TypeTransaction } from "../types/TypeTransaction.js";
import { checkErrors } from "../utils/newTransactionValidator.js";
import { AccountService } from "../service/AccountService.js";

const transactionForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const accountService: AccountService = new AccountService();

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
  transactionForm.reset();

  let transactionRequest: Transaction = {
    date: dateTransaction,
    typeTransaction: TypeTransaction[typeTransactionString],
    value: valueTransaction,
  };

  const errors = checkErrors(transactionRequest);
  if (errors != "") {
    const msgErrors: string = `Favor preencher ${errors} corretamente.`;
    alert(msgErrors);
    return;
  }

  if (
    transactionRequest.typeTransaction == TypeTransaction.transfer ||
    transactionRequest.typeTransaction == TypeTransaction.paymentSlip
  ) {
    transactionRequest.value *= -1;
  }

  const newTransaction: Transaction = {
    date: transactionRequest.date,
    typeTransaction: transactionRequest.typeTransaction,
    value: transactionRequest.value,
  };
  accountService.atualizaSaldo(newTransaction.value);

  console.log(newTransaction);
});
