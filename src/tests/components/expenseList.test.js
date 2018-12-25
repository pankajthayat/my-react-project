// when we test a react component we want to test the unconnected verison
//cuz we want to able to provide a set of dynamic props and we dont want that coming from store.
// so we export as named export

import React from "react";
import { shallow } from "enzyme"
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expense";

test("should render ExpenseList with expenses ",()=>{
    //
    const wrapper=shallow(<ExpenseList expenses={expenses}/>)// now we the actual rendered compo..now we need to set up the snampshot
    expect(wrapper).toMatchSnapshot();
    
})

test("should render ExpenseList with expense",()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>)// now we the actual rendered compo..now we need to set up the snampshot
    expect(wrapper).toMatchSnapshot();
    
})