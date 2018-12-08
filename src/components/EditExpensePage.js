import React from "react";
//import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm"
import { removeExpense } from "../actions/expenses"
import {editExpense} from "../actions/expenses"


const EditExpensePage=(props)=>
{
    //console.log(props)
    //console.log("pankaj : "+props.match.params.id);
    return(<div>
      <ExpenseForm
      expense={props.expense}
      onSubmit={(expense)=>{
          // dispach the action to edit the expense and redirect it
          props.dispatch(editExpense(props.expense.id,expense));
          props.history.push("/");
        //  props.history.push("/")
          //console.log("updated ",expense)
      }}
      />
      <button onClick={()=>{
        props.dispatch(removeExpense({id:props.expense.id}))
        }}>Remove</button>
      </div>
  );
  };
  const mapStateToProps=(state,props)=>{
   return {
       expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
   }
  };
  export default connect(mapStateToProps)(EditExpensePage);