// when we test a react component we want to test the unconnected verison
//cuz we want to able to provide a set of dynamic props and we dont want that coming from store.
// so we export as named export

import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expense";

test("should render ExpenseList with expenses ", () => {
  //
  const wrapper = shallow(<ExpenseList expenses={expenses} />); // now we the actual rendered compo..now we need to set up the snampshot
  expect(wrapper).toMatchInlineSnapshot(`
<div>
  <h1>
    ExpenseLista
  </h1>
  <ExpenseListItems
    amount={195}
    createdAt={0}
    description="Gum"
    id="1"
    key="1"
    note=""
  />
  <ExpenseListItems
    amount={109500}
    createdAt={-345600000}
    description="Rent"
    id="2"
    key="2"
    note=""
  />
  <ExpenseListItems
    amount={4500}
    createdAt={345600000}
    description="Credit Card"
    id="3"
    key="3"
    note=""
  />
</div>
`);
});
