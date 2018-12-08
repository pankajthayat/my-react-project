import React from "react";
import ReactDOM from "react-dom"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux"
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import axios from "axios";
import configureStore from "./store/configureStore"
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"



const store = configureStore();

store.dispatch(addExpense({ description: "gas bill", amount: 100, createdAt: 300 }));
store.dispatch(addExpense({ description: "water bill", amount: 444, createdAt: 599 }));
store.dispatch(addExpense({ description: "rent", amount: 1090, createdAt: 199 }));
//store.dispatch(setTextFilter("water"));


// setTimeout(()=>{
//     store.dispatch(setTextFilter("bill"));
// },3000)

const state = store.getState();
//console.log(state)
const visible = getVisibleExpenses(state.expenses, state.filters);
//console.log(visible)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx,document.getElementById("app"))











// const first=()=>{
//     console.log("hey there")
//     second();
//     console.log("the end")

// }

// const second=()=>{
//     setTimeout(()=>{
//         console.log("asyn hey")

//     },2000);
// }

// first();





function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 221, 11]
        console.log(recipeID);
        setTimeout((id) => {
            const recipe={
                title:"fresh tomato pasta",
                publisher:"pankaj"
            };
            console.log(`${id} : ${recipe.title}`);
             
        }, 1000,recipeID[2])
    }, 1500);
}
getRecipe();











