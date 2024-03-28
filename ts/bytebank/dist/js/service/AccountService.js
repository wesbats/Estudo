import { updateAccontBalanceDisplay } from "../components/DisplayUpdater.js";
import { AccountBank } from "../types/Account.js";
const accountUser = new AccountBank(3000, "Weslley");
export default class AccountService {
    constructor() { }
    accountIsValid() {
        return accountUser != undefined ? true : false;
    }
    atualizaSaldo(value) {
        accountUser.accountBalanceUpdate(value);
        updateAccontBalanceDisplay();
    }
    getAccountBalance() {
        return accountUser.getAccountBalance();
    }
    getNameOwner() {
        return accountUser.getNameOwner();
    }
}
