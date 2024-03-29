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
    const accountLocalStorageJson = JSON.parse(localStorage.getItem("Account"));
    if (accountLocalStorageJson) {
        const accountLocalStorage = Object.setPrototypeOf(accountLocalStorageJson, AccountBank.prototype);
        return accountLocalStorage;
    }
    else {
        const newAccount = new AccountBank(prompt("Digite seu nome: \n*Essa informação não pode ser alterada."));
        return newAccount;
    }
}
export default repository;
