import React from "react";
import {NavLink} from "react-router-dom";
import ExpenseForm from "./ExpenseForm"
import {connect} from "react-redux"
import {addExpense} from "../actions/expenses"

export class AddExpense extends React.Component{
    onSubmit=(expense)=>{
        this.props.onSubmit(expense);
        this.props.history.push("/")
    };
    render(){
        return(
            <div>
        <h1>Add ExpenseForm</h1>
        <ExpenseForm 
        onSubmit={this.onSubmit}
        />
        </div>
        )
        
    }
}
// const AddExpense=(props)=>(
//     <div>
//     <h1>Add ExpenseForm</h1>
//     <ExpenseForm 
//     onSubmit={}
//     />
//     </div>
//     );

const mapDispatchToProps=(dispatch)=>({
    onSubmit:(expense)=>dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpense);