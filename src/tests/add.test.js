const add =(a,b)=>a+b;

test("should add two numbers ",()=>{
    const result=add(3,4);
    
    /*if(result!==7)
    {
        throw new Error(`you added 3 and 4. the result was ${result}. but expected 7`);
    }*/ // we have created a assertion by this if statement. if it equals to smth then pass else throw error
    // we can create many types of assertions but keeping track of theis boilerplate code is burden
    //jest provide us assertion library. that gives us functions. we can make that fn to make assetions
    expect(result).toBe(7) ;   // we pass the value in that we are gonna make assertion about the we use one of the many methods

})
//expect and test are globals(avilable globally). provided by jest only in our test file that is why .test extension is so important

