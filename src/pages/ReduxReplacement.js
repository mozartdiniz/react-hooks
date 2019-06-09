import React, { useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../fakeRedux/StoreContext';

const ReduxReplacement = () => {
    const { state, dispatch } = useContext(StoreContext);
    const { todos } = state;

    const cleanTodos = useCallback(
        () => dispatch({ type: 'cleanTodos' }),
        [ dispatch ]
    );

    // Simulating componentDidMount
    useEffect(() => {
        // TODO: Move fetch data out of this component. Possible with hooks?
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch({ type: 'saveTodos', data: json }));
    }, [ dispatch ]);

    return (
        <div>
            <Link to="/">Back to React Hooks</Link>

            <h2>TODOs</h2>
            <button onClick={ cleanTodos } >Clean TODOS</button>
            <ul>
                {
                    todos.map(
                        todo =>
                            <li
                                key={ todo.id }
                                style={ todo.completed ? { color: 'gray' } : { color: 'black'} }
                            >
                            { todo.title }
                            <button onClick={ () => dispatch({ type: 'updateTodo', data: {
                                ...todo,
                                completed: !todo.completed,
                            }}) }>Complete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default ReduxReplacement;
