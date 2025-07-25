import { useContext } from 'react';
import { CounterContext } from './CounterContextObject';

// custom hook to access the counter context

const useCounter = () => {
    const context = useContext(CounterContext);

    if(!context) {
        throw new Error('keep useCounter inside CounterProvider')
    }

    return context;
}

export default useCounter;