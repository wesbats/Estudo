import AccountService from "../service/AccountService.js";
import Transaction from "../types/Transaction.js";
import TypeTransaction from "../types/TypeTransaction.js";

const transactionForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const accountService: AccountService = new AccountService();

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!transactionForm) {
    alert("Erro inesperado, favor recarregar a página.");
    return;
  }

  const inputDateTransactionForm = transactionForm.querySelector("#data") as HTMLDataElement;
  const inputTypeTransactionForm = transactionForm.querySelector("#tipoTransacao") as HTMLSelectElement;
  const inputValueTransactionForm = transactionForm.querySelector("#valor") as HTMLInputElement;

  let dateTransaction: Date = new Date(inputDateTransactionForm?.value + " 00:00:00");
  let typeTransactionString: string = inputTypeTransactionForm?.value;
  let valueTransaction: number = Number(inputValueTransactionForm?.value);

  const transactionRequest: Transaction = {
    date: dateTransaction,
    typeTransaction: TypeTransaction[typeTransactionString],
    value: valueTransaction,
  };
  try {
    accountService.addTransaction(transactionRequest);
    transactionForm.reset();
  } catch (error) {
    alert(error.message);
  }
});
