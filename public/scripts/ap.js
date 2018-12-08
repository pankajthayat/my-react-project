"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "pankaflsjflsdjflsjdj"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

// var template=(
//     <div>
//     <h1>Pankaj</h1>
//     </div>
// )


ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

// console.log("App.js is running")

// let count=0;
// const addOne=()=>
// {
//     count++;
// renderCounterApp();
// };
// const minusOne=()=>
// {
//     count--;
//     renderCounterApp();
// };
// const reset=()=>
// {
//     count=0;
//     renderCounterApp();
// }


// const appRoot = document.getElementById("app");


// const renderCounterApp=()=>
// {
//     var template=(
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(template,appRoot);
// };

// renderCounterApp();


// var template =(
// <div>
//     <p>does it change</p>
//     <ol>
//     <li>pankaj</li>
//     <li>rahul</li>
//     <li>manish</li>
//     </ol>
// </div>
// )
// var app={
//     title:"Indecion app",
//     subtitle:"put your life in the hands of a computer",
//     options:["one","two"]
// }


// var template=(
//     <div>
//     <h1>App Details</h1>
//     <p>Name : {app.title}</p>
//     {app.subtitle&&<p>{"Subtitle: "+app.subtitle}</p>}
//     <p>{app.options.length>0?options():"No Options"}</p>
//     </div>
// )

// function options()
// {//why is it not working without return??
//     return(
//     <div>
//     <p>Here are your options</p>
//     <ol>
//     <li>Item One</li>
//     <li>Item two</li>
//     </ol>
//     </div>
//     )
// }


// function getLocation(location)
// {
//   if(location)
//   {
//       return <p>Location : {location}</p>;
//   }
// }
// var user={
//     name:"kunal singh",
//     city:"bangalore",
//     age:46,
//     location:"Chennai"

// }
// var templateTwo=(
//     <div>
//     <h1>{user.name?user.name:"Anonymous"}</h1>
//     <p>City : {user.city}</p>
//    {user.age&&user.age>=18&&<p>Age:{user.age}</p>}
//    <p>{getLocation(user.location)}</p>

//     </div>
// )
