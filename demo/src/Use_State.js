import React, { useState } from 'react';

function Use_State() {
    const [count, setCount] = useState(100);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrementCount = () => {
        setCount((prevCount) => prevCount -1);
    }

    return (
        <div>
            <h1>Use State Demo (new one) </h1>
            <p>Count is initialized using useState hook: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
}

export default Use_State;