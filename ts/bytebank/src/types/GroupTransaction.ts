import Transaction from "./Transaction.js";

type GroupTransaction = {
  label: string;
  transactions: Transaction[];
};

export default GroupTransaction;
