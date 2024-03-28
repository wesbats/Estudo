import AccountBank from "../types/Account.js";
class repository {
    constructor() {
        this.date = new Date();
        this.accountUser = getAccountUserFromLocalStorage();
    }
    save() {
        localStorage.setItem("Account", JSON.stringify(this.accountUser));
    }
}
function getAccountUserFromLocalStorage() {
    const accountLocalStorageJson = JSON.parse(localStorage.getItem("Account"), (key, value) => {
        if (key == "listTransactions") {
            value.forEach((transaction) => {
                transaction.date = new Date(transaction.date);
            });
        }
        return value;
    });
    if (accountLocalStorageJson) {
        const accountLocalStorage = Object.setPrototypeOf(accountLocalStorageJson, AccountBank.prototype);
        return accountLocalStorage;
    }
    else {
        const newAccount = new AccountBank(prompt("Digite seu nome:"));
        return newAccount;
    }
}
export default repository;
