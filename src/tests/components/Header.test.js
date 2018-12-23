import React from "react"
//import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json"// we can also set up enzme-to-sjon work automentically.. dont need to write it

test("should render Header correctly",()=>{
  const wrapper=shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
// in sanpshot we will a lot of internal things of enzyme lib as well.. if any thing of the chnage our..snampshot will change.. test will fail..
// we dont want that junk.. to make enzyme work with sanpshot testing functionality ..a lib...enzyme to json
// we want only renderd output
  



//expect(wrapper.find("h1").text()).toBe("Expensify")
  //we can test text, element or elemnet by id like this using enzyme
  
  
  
  
  

  // this is react-shallow-renderere
    // const renderer =new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();// the 1st time we run this test case it is always going to pass.. cause thr is no existing sanpsot.. so jest will create a new one ...ie... the 1st time header renders. and 2nd time it will try to math that will 1st one



    // console.log(renderer.getRenderOutput());
})