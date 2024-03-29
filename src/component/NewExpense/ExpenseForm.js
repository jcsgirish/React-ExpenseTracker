import React ,{useState}from "react"
import "./ExpenseForm.css"

const Expenseform=(props)=>{
  const[enteredtitle,settitle]=useState('');

  const[enteredamount,setamount]=useState('');

  const[entereddate,setdate]=useState('');
  

  const titlehandle=(event)=>{

      settitle(event.target.value);
  };
    const amounthandle=(event)=>{
      setamount(event.target.value)
    }
    const datehandle=(event)=>{
      setdate(event.target.value)
    }
  
    const submithandler=(event)=>{
      event.preventDefault()

      const Expenseall={
      
        title:enteredtitle,
        amount:enteredamount,
        date:new Date(entereddate)
        
      };
      props.SaveExpense(Expenseall);
      settitle('')
      setamount('')
      setdate('')
  
    

    };
  return (
        <form onSubmit={submithandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'onChange={titlehandle} value={enteredtitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount </label>
          <input
            type='number' min='0.01'step='0.01'onChange={amounthandle}value={enteredamount} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'min='2019-01-01'max='2022-12-31'onChange={datehandle}value={entereddate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
        </form>
    )
}

export default Expenseform