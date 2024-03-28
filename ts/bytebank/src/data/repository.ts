import AccountBank from "../types/Account.js";

const repository = {
  accountUser: getAccountUserFromLocalStorage(),
  date: new Date(),
  save: saveAccountUser(),
};

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

function saveAccountUser() {
  localStorage.setItem("Account", JSON.stringify(repository.accountUser));
}

export default repository;
