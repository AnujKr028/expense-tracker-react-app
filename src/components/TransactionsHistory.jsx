import React from 'react'

export const TransactionsHistory = ({ transactions, onDeleteTransaction }) => {
  return (
    <> 
    
    <div className="transaction-history"> 


<h2 className="transac-history-title"> All Transactions</h2> 
<hr />
 
 <table> 
    <thead> 
        <tr> 
            <th>Text</th>
            <th>Amount</th>
            <th>Action</th>
        </tr> 
    </thead> 

    <tbody> 
    {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.text}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
    </tbody>
 </table>
    </div>

    
    </>
  )
}
