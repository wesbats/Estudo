import { startDisplay, updateAccontBalanceDisplay } from "../components/DisplayUpdater.js";
import repository from "../data/repository.js";
import TypeTransaction from "../types/TypeTransaction.js";
import checkErrors from "../utils/transactionValidator.js";
class AccountService {
    constructor() {
        this.repo = new repository();
        this.accountUser = () => {
            return this.repo.accountUser;
        };
        startDisplay(this.accountUser().getAccountBalance(), this.getDate(), this.accountUser().getNameOwner());
    }
    accountIsValid() {
        return this.accountUser() != undefined ? true : false;
    }
    getDate() {
        return this.repo.date;
    }
    getAccountBalance() {
        return this.accountUser().getAccountBalance();
    }
    getNameOwner() {
        return this.accountUser().getNameOwner();
    }
    addTransaction(transactionRequest) {
        const errors = checkErrors(transactionRequest);
        if (errors != "") {
            const msgErrors = `Favor preencher ${errors} corretamente.`;
            throw new Error(msgErrors);
        }
        if (transactionRequest.typeTransaction == TypeTransaction.transfer ||
            transactionRequest.typeTransaction == TypeTransaction.paymentSlip) {
            if (transactionRequest.value > this.getAccountBalance()) {
                throw new Error("Saldo para operação insulficiente");
            }
            transactionRequest.value *= -1;
        }
        const newTransaction = {
            date: transactionRequest.date,
            typeTransaction: transactionRequest.typeTransaction,
            value: transactionRequest.value,
        };
        this.accountUser().addTransaction(newTransaction);
        this.repo.save();
        console.log(this.accountUser().getGroupTransactions());
        updateAccontBalanceDisplay(this.accountUser().getAccountBalance());
    }
}
export default AccountService;
