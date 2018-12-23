import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure(
    {
      adapter:new Adapter()
    }
)// this can take all sorts of config... we are going to pass objeect.. on this obj we can specify various config
//
// we want to create setup enzyme adapter for our project... tis allows us to configure our test config
// refer docs..airbnb
// next step-> set up jest cofig json file...which allows us to specify the test file should run...becaus it doesnot have special name. it will not get picked up autometically
