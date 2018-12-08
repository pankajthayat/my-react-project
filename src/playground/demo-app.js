import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore"
import "normalize.css/normalize.css";// for making sure that all browser start at the same... we are reset the css..beacuse each browser have there default state.. and our app may look diff in diff browser if we dont reset
// npm install normlize.css
import {Provider} from "react-redux";
import './styles/styles.scss';
import AppRouter from "./Router/AppRouter"
import getVisibleExpenses from "./selectors/expenses"
import {addExpense,removExpense,editExpense} from "./actions/expenses";
import {setTextFilters,sortByDate,sortByAmount,setStartDate,setEnddate} from "./actions/filters";
const store=configureStore();


store.dispatch(addExpense({description:"water bill",note:"water",amount:100,createdAt:1000}));
store.dispatch(addExpense({description:"gas bill",note:"gas",amount:900,createdAt:9000}));
store.dispatch(setTextFilters("a"))
store.dispatch(setStartDate(90));
store.dispatch(sortByAmount())


const visibleState=getVisibleExpenses(store.getState().expenses,store.getState().filters)

//const x=store.getState();
//console.log(" "+store.getState())
// console.log(x.expenses);
// console.log(x.filters)
//console.log(store.getState());
//console.log(visibleState)

const jsx=(
<Provider store={store}>{/* we have to pass a prop that is store we want to share with the app */} 
<AppRouter />
</Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));






