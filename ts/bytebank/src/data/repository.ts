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
  const accountLocalStorageJson: string = JSON.parse(localStorage.getItem("Account"), (key: string, value) => {
    if (key == "listTransactions") {
      value.forEach((transaction) => {
        transaction.date = new Date(transaction.date);
      });
    }
    return value;
  });
  if (accountLocalStorageJson) {
    const accountLocalStorage: AccountBank = Object.setPrototypeOf(accountLocalStorageJson, AccountBank.prototype);
    return accountLocalStorage;
  } else {
    const newAccount: AccountBank = new AccountBank(prompt("Digite seu nome:"));
    return newAccount;
  }
}

export default repository;
