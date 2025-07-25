import React, { useReducer } from 'react';
import { CounterContext } from './CounterContextObject';

// 1. Reducer Function / logic
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT': 
            return { count: state.count -1 };
        case 'RESET': 
            return { count: 0 };
        default:
            throw  new Error('Unkown action type');
    }
};

// 3. Provider Component
export const CounterProvider = ({ children }) => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const increment = () => dispatch( { type: 'INCREMENT'} );
    const decrement = () => dispatch( { type: 'DECREMENT'} );
    const reset = () => dispatch( { type: 'RESET'} );


    return (
        <CounterContext.Provider value={{count: state.count, increment, decrement, reset}}>
            {children}
        </CounterContext.Provider>
    )
}