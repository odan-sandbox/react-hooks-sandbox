import React from 'react';
import { useCounter } from "./Hooks"

const LocalCounter: React.FC = () => {
    const {count, increment} = useCounter(); 
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => increment()}>
                increment
            </button>
        </div>
    )
}

export default LocalCounter;
