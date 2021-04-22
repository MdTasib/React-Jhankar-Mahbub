import React, { useState, useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Use Reducer Hook</h2>
            <h1>Reducer Count {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
    );
};

export default ReducerCount;