import {createStore, bindActionCreators} from "redux";
//const store =createStore((state={count:0})=>{return state});
// taking functionas arg and the arg ins function is state
//by setting count:0 we have set a default value..if there is no object it will be taken
//store is the thing that track our changing data over time
//

const incrementCount=({incremnetBy=1}={})=>({
    type:'INCREMENT',
    incremnetBy
})

const decrementCount=({decrementBy=1}={})=>{
    return{
        type:'DECREMENT',
        decrementBy
    }
}
const resetCount=()=>{
    return{
        type:'RESET'
    }
}
const setCount=({set=100}={})=>({
    type:'SET',
    set
})

const store=createStore((state={count:0},action)=>
{
    //console.log("running..."+state.count)
    switch(action.type){
     case 'INCREMENT':
     return{
         count:state.count+action.incremnetBy
     };
     case 'DECREMENT':
     return{
      count:state.count-action.decrementBy
     }
     case 'SET':
        return{
               count:action.set
        }
     case 'RESET':
     return{
         count:state.count=0
     }
    }
})

//subscribe takes a function and every time it sees any changes in state the passed will get called;
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});
//store.dispatch(incrementCount({incremnetBy:5}));


store.dispatch(incrementCount({incremnetBy:10}));
store.dispatch(decrementCount({decrementBy:5}));
store.dispatch(resetCount());
store.dispatch(setCount({set:500}));


//store.dispatch({type:'dsakdhkh'})





