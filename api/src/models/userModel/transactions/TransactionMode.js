import TransactionSchenma from "./TransactionSchema.js";


const addTransaction = obj =>{
    return TransactionSchenma(obj).save();
    
}