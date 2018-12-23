import {addExpense,editExpense,removeExpense } from "../../actions/expenses"


test("should set up remove action object ",()=>{
    const result=removeExpense({id:"abc"});
    expect(result).toEqual({type:"REMOVE_EXPENSE",
    id:"abc"
    })
})

test("should set up edit expense",()=>{
    const result=editExpense("abc",{x:"pankaj",y:"rahul"})
    expect(result).toEqual({type:"EDIT_EXPENSE",
id:"abc",
updates:{x:"pankaj",y:"rahul"}
})
})














// test('should set up remove expense action object',()=>{
//     const action=removeExpense({id:"123abc"});
//     expect(action).toEqual({
//         type:"REMOVE_EXPENSE",
//         id:"123abc"
//     })
// })


// test("should set up edit expense action object",()=>{
//    let id="";let updates={};
//     const action=editExpense("abc",updates={note:"new Note", value:"pankaj"});
//     expect(action).toEqual({
//         type:"EDIT_EXPENSE",
//         id:"abc",
//         updates
//     })
// })

// test("should set up add action object with provided values",()=>{
// const expenseData={  
//     description:"rent",
//     note:"my note",
//     amount:10,
//     createdAt:1000
// }
// const action=addExpense(expenseData);
// expect(action).toEqual({
//     type:"ADD_EXPENSE",
//     expense:{
//         ...expenseData,
//         id:expect.any(String)
//     }
// })
// })
//  test("should setup add expense action object with default values",()=>{
// const expenseData={};
// const action=addExpense(expenseData);
// expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//         description:"",
//         note:"",
//         amount:0,
//         createdAt:0,
//         id:expect.any(String)
//     }
// })
//  })

 