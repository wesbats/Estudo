import TypeTransaction from "./TypeTransaction.js";

export type Transaction = {
  date: Date;
  typeTransaction: TypeTransaction;
  value: number;
};

export default Transaction;
