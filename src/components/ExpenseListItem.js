import React from "react"
//import { connect } from "react-redux";
import {Link} from "react-router-dom"

import { removeExpense } from "../actions/expenses"
export const ExpenseListItems =({id,description,amount,createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>{amount }   --   {createdAt}</p>
   { /* <button onClick={()=>{
     dispatch(removeExpense({id}))
     }}>Remove</button>
     <button>edit</button>
     </div> */
    }
    </div>

)


// const mapStateToProps=(state)=>{
//     return{
//         expenses:state.expenses
//     }
// }
//export default connect(mapStateToProps)(ExpenseListItems);
export default ExpenseListItems;