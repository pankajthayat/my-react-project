const moment=jest.requireActual("moment");
//import moment from "moment" its working not cause stack overflow
export default (timestamp=0)=>{
    console.log("hello pankaj")
    return moment(timestamp);
}