import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("should render Header correctly",()=>{
    const renderer =new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();// the 1st time we run this test case it is always going to pass.. cause thr is no existing sanpsot.. so jest will create a new one ...ie... the 1st time header renders. and 2nd time it will try to math that will 1st one
    


    console.log(renderer.getRenderOutput());
})