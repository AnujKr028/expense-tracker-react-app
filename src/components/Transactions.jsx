import React, { useState } from 'react';

export const Transactions = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [entryType, setEntryType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      onAddTransaction(entryType, amount, text);  // Add the transaction
      setText('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="transactions">
        <div className="transac-title">Add new transaction</div>
        <hr /> 
        <p className="entry-type-title">Entry Type : </p>
        <select
          name="entry-type"
          id="entry-type"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="Income">Income</option>
          <option value="Expenses">Expenses</option>
        </select>
        <br />

        <label htmlFor="text">Text</label><br />
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)} 
          placeholder='Type of income/expenses...'
        />
        <br />

        <label htmlFor="amount">Amount</label><br />
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          placeholder='0'
        />
        <br />

        <button className='add-transc-btn' type="submit">Add Transaction</button>
      </div>
    </form>
  );
};
