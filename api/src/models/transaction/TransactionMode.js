import TransactionSchema from "./TransactionSchema.js";

export const addTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransactions = (filter) => {
  return TransactionSchema.find(filter);
};

export const deleteTransaction = (filter) => {
  return TransactionSchema.findOneAndDelete(filter);
};
