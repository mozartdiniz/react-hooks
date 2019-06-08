import React, { useContext } from 'react';

import RootContext from '../context/RootContext';

const ContextConsumer = () => {
    const { todos } = useContext(RootContext);

    return (
        <div>
            <h3>Context API</h3>
            <ul>
                {
                    todos && todos.map(todo => <li key={ todo.id }>{ todo.title }</li>)
                }
            </ul>
        </div>
    );
};

export default ContextConsumer;
