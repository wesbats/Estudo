export const accountBank: AccountBank = new AccountBank(3000, "Weslley");
import { AccountBank } from "./types/Account.js";
import { startDisplay } from "./components/DisplayUpdater.js";
import "./components/DisplayUpdater.js";
import "./components/NewTransaction.js";

startDisplay();
