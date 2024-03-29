import AccountBank from "../types/Account.js";

class repository {
  accountUser: AccountBank;
  date = new Date();

  constructor() {
    this.accountUser = getAccountUserFromLocalStorage();
  }

  save() {
    localStorage.setItem("Account", JSON.stringify(this.accountUser));
  }
}

function getAccountUserFromLocalStorage(): AccountBank {
  const accountLocalStorageJson: string = JSON.parse(localStorage.getItem("Account"));
  if (accountLocalStorageJson) {
    const accountLocalStorage: AccountBank = Object.setPrototypeOf(accountLocalStorageJson, AccountBank.prototype);
    return accountLocalStorage;
  } else {
    const newAccount: AccountBank = new AccountBank(
      prompt("Digite seu nome: \n*Essa informação não pode ser alterada.")
    );
    return newAccount;
  }
}

export default repository;
