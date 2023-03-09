function ExpenseDate(props){
    const Month=props.date.toLocaleString('en-US',{ month:'long'});
    const Year=props.date.getFullYear();
    const Day=props.date.toLocaleString('en-US',{ day:'2-digit'});

return (
   
          <div>
         <div>{Month}</div>
          <div>{Year}</div>
          <div>{Day}</div>
          </div>
    
);
}

export default ExpenseDate;