import { useState } from 'react';
import { Balance } from './Balance';
import { Transactions } from './Transactions';
import { TransactionsHistory } from './TransactionsHistory'; // Import TransactionsList

export const UpdateBalance = () => { 
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]); // State for storing all transactions

  const onAddTransaction = (type, amount, text) => {  
   
    const numericAmount = parseFloat(amount);

    const newTransaction = {id : Date.now() , type , amount : numericAmount ,text}

    setTransactions((prevTransactions) => [...prevTransactions , newTransaction])
    if (type === "Income") {
      setIncome((prevIncome) => prevIncome + numericAmount);
      setBalance((prevBalance) => prevBalance + numericAmount);
    } else if (type === "Expenses") {
      setExpense((prevExpense) => prevExpense + numericAmount);
      setBalance((prevBalance) => prevBalance - numericAmount);
    }


  };

  const onDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    const deletedTransaction = transactions.find(transaction => transaction.id === id);

    if (deletedTransaction) {
      const { amount, type } = deletedTransaction;

      if (type === "Income") {
        setIncome((prevIncome) => prevIncome - amount);
        setBalance((prevBalance) => prevBalance - amount);
      } else if (type === "Expenses") {
        setExpense((prevExpense) => prevExpense - amount);
        setBalance((prevBalance) => prevBalance + amount);
      }
    }

    setTransactions(updatedTransactions);
  };


  return (
    <> 
      <Balance balance={balance} income={income} expense={expense} />
      <Transactions onAddTransaction={onAddTransaction} />
      <TransactionsHistory 
        transactions={transactions} 
        onDeleteTransaction={onDeleteTransaction} 
      />

    </>
  );
};
