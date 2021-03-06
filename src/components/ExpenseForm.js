import React from "react"
import moment from "moment";
import  { SingleDatePicker } from "react-dates";
//import 'react-dates/lib/css/_datepicker.css'; why are we removeing it when working woth snapshot testing
import 'react-dates/initialize';


const now =moment();
console.log(now.format('MMM Do, YYYY'));
export default class ExpenseForm extends React.Component{
  constructor(props)
  {
      super(props)
      this.state={
        description:props.expense?props.expense.description:"",
        note:props.expense?props.expense.note:"",
        amount:props.expense?(props.expense.amount/100).toString():"",
        createdAt:props.expense?moment(props.expense.createdAt):moment(),
        calenderFocused:false,
        error:""
    }


  }
    ondescriptionChange=(e)=>
    {
const description=e.target.value;
this.setState(()=>({description}))
    }
    onNoteChange=(e)=>
    {
const note=e.target.value;

this.setState(()=>({note}))

    }
    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/))//amount.match(/^\d*(\.\d{0,2})?$/)
        {
           this.setState(()=>({amount}));
        }
       // console.log(this.state);
    }
    onDateChange=(createdAt)=>{
        //console.log(createdAt)
        if(createdAt)
        {
            //console.log(createdAt)
            this.setState(()=>({createdAt}))
        }
        
     
    };
    onFocusChange=({focused})=>{
      this.setState(()=>({calenderFocused:focused}))
    };
    onSubmit=(e)=>{
        e.preventDefault();
        //console.log("on submit.."+this.state.error)
        if(!this.state.description||!this.state.amount)
        {
//set the error state equal to " please...."
this.setState(()=>({error:"please provide description and amount"}))
        }
        else{
// clear the error
this.setState(()=>({error:""}))
this.props.onSubmit({
    description:this.state.description,
    amount:parseFloat(this.state.amount,10)*100,
    createdAt:this.state.createdAt.valueOf(),
    note:this.state.note
    

})
        }
    }
    render()
    {
        return (
            <div>
            {this.state.error&&<p>{this.state.error}</p>}
           <form onSubmit={this.onSubmit}>
           <input type="text" 
           placeholder="description"
            autoFocus value ={this.state.description} 
            onChange={this.ondescriptionChange}
            />
            <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />

            <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}// we can set range for date too. here we want to set no range thats why false
            />
           <textarea  placeholder ="Add a note for your expense(OPtional)"
           value={this.state.note}
           onChange={this.onNoteChange}
           />
         <button>Add expense</button>
           </form>
            </div>
        )
 
    }
}