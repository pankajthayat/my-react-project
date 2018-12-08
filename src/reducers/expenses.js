const expensesReducerDefaultState=[];
export default (state=expensesReducerDefaultState,action)=>
{
switch(action.type)
{
  case "ADD_EXPENSE":
  return [...state,action.expense]//why dont we change state directly instead of returning new objtec.
  case "REMOVE_EXPENSE":
  return state.filter(({id})=>id!==action.id);
  case "EDIT_EXPENSE":
  return state.map((expense)=>{
    if(expense.id==action.id)
    {
      return {...expense,...action.updates}
    }
    else
    return expense;
  })
  default:
  return state;
}
}


































// const expensesReducerDefaultState = [];

// export default (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//       case 'ADD_EXPENSE':
//       return [...state,action.expense];
//       case 'REMOVE_EXPENSE':
//       return state.filter(({id})=>id!==action.id);
//       //return state.concat(action.expense);
//       case 'EDIT_EXPENSE':
//       return state.map((expense)=>
//       {
//         if(expense.id=action.id)
//         {
//           return {
//             ...expense,
//             ...action.updates
//           }
//         }
//         else{
//           return expense;
//         }
//       })
//     default:
//       return state;
//   }
// };

