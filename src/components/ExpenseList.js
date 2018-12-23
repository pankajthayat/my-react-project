import React from "react"
import {connect} from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses";
// const ExpenseList=(props)=>(
//     <div>
//     <h1>ExpenseList</h1>
//      {props.expenses.length}
//     </div>
// )
// () this is where we propvide info about what we want to connect
// we have  a ton  of info in StorageEvent. do we want ot pass all no only subset of that
// so we define a fun here which determine what ifo from store we want our component to access 
// and the store state is passsed as an arg and we return a object...useually these things are from state but we are setying here as key value pair onject for our convienence

//now the connecte compo has access to name prop
// const ConnectedExpenseList=connect((state)=>{
// return{
//     expenses:state.expenses
// }
//})(ExpenseList) ; //connect() means we will get a function in return and we need to call that function. so connect()(); and pass ExpenseList as args

// export default ExpenseList;
//export default ConnectedExpenseList

export const ExpenseList=(props)=>(
    <div>
   {
       props.expenses.length===0?(
        <p>No expense</p>
       ):(
        props.expenses.map((expense)=>(
            <ExpenseListItem key ={expense.id} {...expense}></ExpenseListItem>
        ))
       )
   }
    </div>
)

const mapStateToProps=(state)=>{
    return{
            expenses:selectExpenses(state.expenses,state.filters)
           }
    }
const ConnectedExpenseList=connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;