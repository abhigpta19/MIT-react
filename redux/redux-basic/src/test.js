import {createStore} from 'redux'

const initialState = {
    name: "Abhishek Gupta",
    age: 24,
    balance: 1000,
    city : "Delhi"
}

function reducer(state=initialState,action)
{
    if(action.type === "CHANGE_NAME")
    {
        return {
            ...state,
            name: action.payload
        }
    }
    else if(action.type === "CHANGE_CITY")
    {
        return {
            ...state,
            city: action.payload
        }
    }
    else if(action.type === "INCREASE_BALANCE")
    {
        return {
            ...state,
            balance: state.balance + action.payload
        }
    }
    else if(action.type === "DECREASE_BALANCE")
    {
        return {
            ...state,
            balance: state.balance - action.payload
        }
    }
    else if(action.type === "CHANGE_AGE")
    {
        return {
            ...state,
            age: action.payload
        }
    }
    else
    {
        return state
    }
}
export const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})
