import React from "react";
import {NavLink} from "react-router-dom";
import ExpenseForm from "./ExpenseForm"
import {connect} from "react-redux"
import {addExpense} from "../actions/expenses"
const AddExpense=(props)=>(
    <div>
    <h1>Add ExpenseForm</h1>
    <ExpenseForm 
    onSubmit={(expense)=>{
       console.log(expense)
        props.dispatch(addExpense(expense));
        props.history.push("/")
    }}
    />
    </div>
    );

export default connect()(AddExpense);