









store.subscribe(()=>{
  const state=store.getState();
 // console.log(state);
  const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
})

 const expenseOne=store.dispatch(addExpense({description:"rent",amount:100,createdAt:500}));
 const expenseTwo=store.dispatch(addExpense({description:"coffee",amount:999,createdAt:1225}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:555}))

 store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));


























































































































































































































































































































































// const user={
//   name:"pankaj",
//   age:34,
//   place:"chennai"
// }
// const addExpense=({description="",note="",amount=0,createdAt=0}={})=>(
//     {
//       type:'ADD_EXPENSE',
//       expense:{
//           id:uuid(),
//           description,
//           note,
//           amount,
//           createdAt
//         }
//     }
// )
// const removeExpense=({id}={})=>{
//   return{
// type:"REMOVE_EXPENSE",
// id
//   }
// }

// const editExpense=(id,updates)=>{
//   return{
//     type:'EDIT_EXPENSE',
//     id,
//     updates
//   }
// }
// const sortByDate=()=>{
//   return {
//     type:"SORT_BY_DATE"
//   }
// }
// const sortByAmount=()=>({
//   type:"SORT_BY_AMOUNT"
// })
// const setStartDate=(startDate)=>({
// type:"SET_START_DATE",
// startDate
// })
// const setEndDate=(endDate)=>({
//   type:"SET_END_DATE",
//   endDate
// })
// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
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


// const setTextFilter=(text)=>
// {
// return{
//   type:'SET_TEXT_FILTER',
//   text
// }
// }
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//     return {
//       ...state,
//       text:action.text
//     }
//     case "SORT_BY_AMOUNT":
//     return {
//       ...state,
//       sortBy:"amount"
//     }
//     case 'SORT_BY_DATE':
//     return {
//       ...state,
//       sortBy:"date"
//     }
//     case 'SET_START_DATE':
//     return{
//       ...state,
//       startDate:action.startDate
//     }
//     case "SET_END_DATE":
//     return{
//       ...state,
//       endDate:action.endDate
//     }

//     default:
//       return state;
//   }
// };

// // Store creation

// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducer
//   })
// );

// const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
//   return expenses.filter((expense)=>{
//      const startDateMatch=typeof startDate!=='number'|| expense.createdAt>=startDate;
//     const endDateMatch=typeof endDate!=='number'||expense.createdAt<=endDate;
//     const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
//     //console.log(startDateMatch+"  "+startDate+" "+expense.createdAt)
//     return startDateMatch && endDateMatch&&textMatch;
//   }).sort((a,b)=>{

//   if(sortBy=='date')
//   {
//     return a.createdAt<b.createdAt?1:-1;
//   }
//   else if(sortBy==="amount")
//   {
//     return a.amount<b.amount?1:-1;
//   }
//   });
// }
// store.subscribe(()=>
// {
//     const state=store.getState();
//     const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
//     console.log(visibleExpenses);
//   });
//console.log(store.getState());
//const expenseOne=store.dispatch(addExpense({description:"rent",amount:100,createdAt:100}));
//const expensetwo=store.dispatch(addExpense({description:"coffee",amount:300,createdAt:500}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expensetwo.expense.id,{ amount:90}))
// store.dispatch(setTextFilter("rent"))
// store.dispatch(sortByAmount())//amount
// store.dispatch(sortByDate());//date

// store.dispatch(setStartDate(125));
//  store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());