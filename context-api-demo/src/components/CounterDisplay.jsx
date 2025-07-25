import React from 'react';
import useCounter from '../context/useCounter';

const CounterDisplay = () => {
    const { count } = useCounter();

    return <h1>Counter: {count}</h1>
}

export default CounterDisplay;