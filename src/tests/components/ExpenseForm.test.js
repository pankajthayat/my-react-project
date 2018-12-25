import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expense"
import moment from "moment"

test("should render ExpenseForm correctly",()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseForm correctly with expense data",()=>{
    const wrapper=shallow(<ExpenseForm expenses={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid form submission",()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()

})

test("should set description on input change",()=>{
    const value="new Description";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change",{
        target:{ value }
    })
    expect(wrapper.state("description")).toBe(value);
    expect.toMatchSnapshot()
})


///set test for note

test("should submitv expense form with valid data",()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        amount:expenses[0].amount,
        description:expenses[0].description,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
})

test("should set new date on date change ",()=>{
    const now =moment();
    //const wrapper=shallow(<ExpenseForm expense ={ expenses[1] }/>);
    const wrapper=shallow(<ExpenseForm />);
   // wrapper.find("SingleDatePicker").simulate("change")
   wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  // wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  // why we used with styles..cuz now single date picker is coming with style... if we import single Date picker here...no need to write with styles
  expect(wrapper.state("createdAt")).toBe(now);

})