import React, { createContext, useReducer, useEffect } from 'react';

import reducer from './reducer';

const initialState = {
    todos: []
}

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() =>
        console.log({ newState: state }), [ state ]);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export { StoreContext, StoreProvider };
