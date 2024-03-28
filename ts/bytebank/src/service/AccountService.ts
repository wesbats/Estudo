import { updateAccontBalanceDisplay } from "../components/DisplayUpdater.js";
import { AccountBank } from "../types/Account.js";
const accountUser: AccountBank = new AccountBank(3000, "Weslley");

export class AccountService {
  constructor() {}

  accountIsValid(): boolean {
    return accountUser != undefined ? true : false;
  }

  atualizaSaldo(value: number): void {
    accountUser.accountBalanceUpdate(value);
    console.log(accountUser.getAccountBalance());
    updateAccontBalanceDisplay();
  }

  getAccountBalance(): number {
    return accountUser.getAccountBalance();
  }

  getNameOwner(): string {
    return accountUser.getNameOwner();
  }
}
