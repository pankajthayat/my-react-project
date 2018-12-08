//higher order component
import React from "react";
import ReactDOM from "react-dom";

const Info=(props)=>(
    <div>
    <h1>info</h1>
    <p>the info is : {props.info}</p>
    </div>
)
const withAdminWarning=(WrappedComponent)=>
{
    return (props)=>
    (
        <div>
        <p>this is private info. please dont share !</p>
        <WrappedComponent {...props}/>
       {console.log({...props})}
        </div>
    )
}

const requireAuthentication =(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated?<WrappedComponent {...props}/>:<p>please Log in to view</p>}
        </div>
    )
}

const AuthInfo=requireAuthentication(Info)
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info={"here is the details"}/>,
document.getElementById("app"));