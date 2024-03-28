import { updateAccontBalanceDisplay } from "../components/DisplayUpdater.js";
import AccountBank from "../types/Account.js";
import TypeTransaction from "../types/TypeTransaction.js";
import checkErrors from "../utils/transactionValidator.js";
//repository
export const repo = {
    accountUser: new AccountBank(3000, "Weslley"),
    date: new Date(),
};
class AccountService {
    constructor() {
        this.accountUser = repo.accountUser;
    }
    accountIsValid() {
        return this.accountUser != undefined ? true : false;
    }
    getAccountBalance() {
        return this.accountUser.getAccountBalance();
    }
    getNameOwner() {
        return this.accountUser.getNameOwner();
    }
    addTransaction(transactionRequest) {
        const errors = checkErrors(transactionRequest);
        if (errors != "") {
            const msgErrors = `Favor preencher ${errors} corretamente.`;
            alert(msgErrors);
            return;
        }
        if (transactionRequest.typeTransaction == TypeTransaction.transfer ||
            transactionRequest.typeTransaction == TypeTransaction.paymentSlip) {
            transactionRequest.value *= -1;
        }
        const newTransaction = {
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
