export const setTextFilter=(text="")=>({
  type:"SET_TEXT_FILTER",
  text
})

export const sortByAmount=()=>(
  {
    type:"SORT_BY_AMOUNT"
  }
)
export const sortByDate=()=>(
  {
    type:"SORT_BY_DATE"
  }
)
export const setStartDate=(startDate=undefined)=>({
  type:"SET_START_DATE",
  startDate
})

export const setEndDate=(endDate=undefined)=>({
  type:"SET_END_DATE",
  endDate
})




































// export const setTextFilters=(text="")=>
// ({
//     type:"SET_TEXT_FILTER",
//     text
// })
// export const sortByDate=()=>{
//     return {
//       type:"SORT_BY_DATE"
//     }
//   }
//   export const sortByAmount=()=>({
//     type:"SORT_BY_AMOUNT"
//   })
//   export const setStartDate=(startDate)=>({
//   type:"SET_START_DATE",
//   startDate
//   })
//   export const setEndDate=(endDate)=>({
//     type:"SET_END_DATE",
//     endDate
//   })