

export const Balance = ({balance,income , expense , transactionText}) => {
  return (

    <>

    <div className="balance"> 
    <p className="div-title">Your Balance</p>
    <p className="balance-amount">${(balance || 0).toFixed(2)}</p>
     


<div className="income-box">
    <div className="income"> 
        <p className="income-title">INCOME</p> 
        <p className="income-amount">${(income || 0).toFixed(2)}</p>
    </div> 
 

    <div className="expense"> 
        <p className="expense-title">EXPENSE</p> 
        <p className="expense-amount">${(expense || 0).toFixed(2)}</p>
    </div>
    </div>

    



    </div> 

    </>

  )
}
