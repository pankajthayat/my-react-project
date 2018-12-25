import React from "react";
import { shallow } from "enzyme"
import { AddExpense } from "../../components/AddExpense";

test("should render Add Expense correctly",()=>{
    const onSubmit=jest.fn();
    const history={ push:jest.fn() };
    const wrapper=shallow(<AddExpense onSubmit={ onSubmit } history ={ history } />)
    expect(wrapper).toMatchSnapshot();
})

test("should call onSubmit Correctly ",()=>{
    
})