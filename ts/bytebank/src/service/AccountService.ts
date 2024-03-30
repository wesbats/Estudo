import Display from "../components/DisplayUpdater.js";
import repository from "../data/repository.js";
import Transaction from "../types/Transaction.js";
import TypeTransaction from "../types/TypeTransaction.js";
import checkErrors from "../utils/transactionValidator.js";

class AccountService {
  private repo: repository = new repository();
  private accountUser = () => {
    return this.repo.accountUser;
  };

  constructor() {
    Display.start(
      this.accountUser().getAccountBalance(),
      this.getDate(),
      this.accountUser().getNameOwner(),
      this.accountUser().getGroupTransactions()
    );
  }

  accountIsValid(): boolean {
    return this.accountUser() != undefined ? true : false;
  }
  getDate(): Date {
    return this.repo.date;
  }

  getAccountBalance(): number {
    return this.accountUser().getAccountBalance();
  }

  getNameOwner(): string {
    return this.accountUser().getNameOwner();
  }

  addTransaction(transactionRequest: Transaction): void {
    const errors = checkErrors(transactionRequest);
    if (errors != "") {
      const msgErrors: string = `Favor preencher ${errors} corretamente.`;
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

    this.accountUser().addTransaction(newTransaction);
    this.repo.save();
    console.log(this.accountUser().getGroupTransactions());
    Display.update(this.accountUser().getAccountBalance(), this.accountUser().getGroupTransactions());
  }
}

export default AccountService;
