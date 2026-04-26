let state = undefined;
const listener = [];

export function createStore(reducer)
{
    function getState()
    {
        return state;
    }

    function dispatch(action)
    {
        state = reducer(state, action);
        for(let i=0; i<listener.length; i++)
        {
            listener[i]();
        }
    }

    function subscribe(func)
    {
        listener.push(func);

        return function unsubscribe()
        {
            listener.splice(listener.indexOf(func), 1);
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}