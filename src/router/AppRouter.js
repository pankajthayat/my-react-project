import React from 'react';

import { BrowserRouter, NavLink,Route,Switch,Link } from 'react-router-dom';//named export we are grabing from react router
//we goona user browser router only once to create the new router and route for every single page
//goona provide the route to path and whats goone happen

//import './styles/styles.scss'// we just tought webpack how to work with css file. when it sees it it know what to do with it we dont need to grab anything
// so we gonna use just import  no need for from default or name

import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpense from "../components/AddExpense"

const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header></Header>
    <Switch>{/*using switch over div here... it will behave like a switch case and defauult. try it  it will search from the start if found a match will stop if not tehn render the deault one which is NotFound here*/}
    <Route exact={true} path="/" component={ExpenseDashboardPage}/>
    <Route path='/create' component={AddExpense}></Route>
    <Route path="/edit/:id" component={EditExpensePage} /> 
    <Route path="/help" component={HelpPage}></Route>
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    
    </BrowserRouter>
)


export default AppRouter;