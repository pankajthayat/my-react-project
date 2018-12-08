import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';


// const demoState={
//     expense:[{
//      id:"pankaj",
     
//     }],
//     filters:{

//     }
// };

// let defaultState=[];
// const expenseReducer=(state=defaultState,action)=>{
//       switch (action.type)
//       {
//           default:
//           return state;
//       }
//     }

// const filterReducer=createStore((state={count:0},action)=>
// {
//     switch(action.type)
//     {
//         default:
//         return state;
//     }
// }
// )
// const filterStore=filterReducer.dispatch({type:''});
// console.log("pankaj : "+filterStore.getState())
// const store=createStore(combineReducers(
//     {
//     expenses:expenseReducer
//     }
// ));
// console.log(store.getState());


//action generator
const addExpense=({description="",
note="",
amount="",
createdAt=""
}={}
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const defaultExpense=[];
const filterDefaultValue={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
};
const filterReducer=(state=filterDefaultValue,action)=>{
    switch(action.type)
    {
        default:
        return state;
    }
}
const expenseReducer=(state=defaultExpense,action)=>{
    switch(action.type)
    {
        case 'ADD_EXPENSE':
        return [...state,action.expense]
        //return state.concat(action.expense)
        default:
        return state;
    }
}
const store=createStore(
    combineReducers({
      expenses:expenseReducer,
      filters:filterReducer
    })
    );
store.subscribe(()=>{
    console.log(store.getState())
})
//store.dispatch(addExpense({description:'Rent',amount:100}));// this action is going to be dispatched to both the recudecers so we have to set up the caese.
//store.dispatch(addExpense({description:'coffee',amount:900}));// this action is going to be dispatched to both the recudecers so we have to set up the caese.
/// now make a removeExpense acyion generator

const user={
    name:"pankaj",
    age:55
}
console.log(
    {
        age:33,
        ...user,
        location:"banglore"
        

    });




