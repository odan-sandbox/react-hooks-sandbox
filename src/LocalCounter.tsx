import React, { useState } from 'react';

const LocalCounter: React.FC = () => {
    const [count, setCount] = useState(0); 
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                increment
            </button>
        </div>
    )
}

export default LocalCounter;
