import React, { useContext } from 'react';

import { CountContext } from "./CountContext"

const ContextCounter: React.FC = () => {
    const {value, increment} = useContext(CountContext)
    return (
        <div>
            <p>count: {value}</p>
            <button onClick={() => increment()}>
                increment
            </button>
        </div>
    )
}

export default ContextCounter;
