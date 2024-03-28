import { updateAccontBalanceDisplay } from "../components/DisplayUpdater.js";
import AccountBank from "../types/Account.js";
import Transaction from "../types/Transaction.js";
import TypeTransaction from "../types/TypeTransaction.js";
import checkErrors from "../utils/transactionValidator.js";

//repository
export const repo = {
  accountUser: new AccountBank(3000, "Weslley"),
  date: new Date(),
};

class AccountService {
  private accountUser;

  constructor() {
    this.accountUser = repo.accountUser;
  }

  accountIsValid(): boolean {
    return this.accountUser != undefined ? true : false;
  }

  getAccountBalance(): number {
    return this.accountUser.getAccountBalance();
  }

  getNameOwner(): string {
    return this.accountUser.getNameOwner();
  }

  addTransaction(transactionRequest: Transaction): void {
    const errors = checkErrors(transactionRequest);
    if (errors != "") {
      const msgErrors: string = `Favor preencher campos ${errors} corretamente.`;
      throw new Error(msgErrors);
    }

    if (
      transactionRequest.typeTransaction == TypeTransaction.transfer ||
      transactionRequest.typeTransaction == TypeTransaction.paymentSlip
    ) {
      if (transactionRequest.value > this.getAccountBalance()) {
        throw new Error("Saldo para operação insulficiente");
      }
      transactionRequest.value *= -1;
    }

    const newTransaction: Transaction = {
      date: transactionRequest.date,
      typeTransaction: transactionRequest.typeTransaction,
      value: transactionRequest.value,
    };

    this.accountUser.addTransaction(newTransaction);
    console.log(this.accountUser.getTransactions());
    updateAccontBalanceDisplay();
  }
}

export default AccountService;
