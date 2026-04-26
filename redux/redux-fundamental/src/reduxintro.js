import {createStore} from "redux";

const initialState = {
    name : "Abhi",
    age : 25,
    balance : 1000,
    phoneNo : "9826176632"
}

// {
//     type: "getBalance"
// }
// {
//     type: "changeName",
//     payload : "Narendra"
// }
// {
//     type: "depositCash",
//     payload : 500
// }

function reducer(prevState=initialState, action)
{
    if(action.type==="account/deposit")
    {
        // initialState.balance += action.payload;
        return {...prevState,balance: prevState.balance+action.payload};
    }
    else if(action.type==="account/withdraw")
    {
         return {...prevState,balance: prevState.balance-action.payload};
    }
    else if(action.type==="account/changeName")
    {
        return {...prevState, name: action.payload};
    }
    else if(action.type==="account/changePhoneNo")
    {
        return {...prevState,phoneNo:action.payload};
    }
    else
        return prevState;
    
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function callOnSubscrible()
{
    console.log(store.getState());
}

function printHello()
{
    console.log("hello");
}

const unsubscribeHello = store.subscribe(printHello);
const unsubscribeCallOnSubscrible = store.subscribe(callOnSubscrible);

store.dispatch({type:"account/changeName",payload:"Narendra"});


store.dispatch({type:"account/deposit",payload:500});

unsubscribeHello();

console.log(store);

store.dispatch({type: "account/withdraw",payload : 1000});




store.dispatch({type: "account/changePhoneNo",payload : "9876543210"});


