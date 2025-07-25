import React from 'react';
import useCounter from '../context/useCounter';

const CounterControls = () => {
    const { increment, decrement, reset } = useCounter();

    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterControls;