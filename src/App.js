import React, { useState, useEffect, useReducer } from 'react';

import RootContext from './context/RootContext';

import reducer from './redux/index';

import UseStateSimple from './components/UseStateSimple';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import DumbComponentA from './components/DumbComponentA';
import ContextConsumer from './components/Consumer';

function App() {
  const [ramdomValue, setRamdomValue] = useState(0);
  const [dumbList, setDumbList] = useState([]);
  const [todos, setTodos] = useState([]);

  const [{ todos: todosReducer  }, dispatch] = useReducer(reducer, { todos: [] });

  useEffect(() => {
      if (todos.length) {
          return;
      }

      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => {
            setTodos(json.slice(0, 5));
            dispatch({ type: 'saveTodos', data: json });
          });
  });

  useEffect(() => {
    // Change value of simpleProp every second to force UseEffect component re-render
    const pin = setInterval(() => {
      setRamdomValue(parseInt((Math.random() * 100).toFixed()));

      if (dumbList.length < 5) {
        setDumbList([...dumbList, { id: Math.random(), name: 'Dumb Name' }]);
      }
    }, 1000);

    return () => {
      clearInterval(pin);
    };
  }, [dumbList]);

  return (
    <div className="App">
    <RootContext.Provider value={{ todos }}>
        <h2> Use State Examples</h2>
        <UseStateSimple />
        <UseState />
        <DumbComponentA>
          <UseEffect simpleProp={ ramdomValue } complexProp={ dumbList }/>
          <ContextConsumer />
        </DumbComponentA>
    </RootContext.Provider>
    <RootContext.Provider value={{ todos: todosReducer }}>
      <h2> Reducer</h2>
      <DumbComponentA>
        <ContextConsumer />
      </DumbComponentA>
    </RootContext.Provider>
    </div>
  );
}

export default App;
