import React, { useState } from 'react';

const UseStateSimple = () => {
    const [n, setN] = useState(0);

    return (
        <div>
            <p>You clicked {n} times</p>
            <button onClick={() => setN(n + 1)}>
                Click me
            </button>            
        </div>
    );
}

export default UseStateSimple;
