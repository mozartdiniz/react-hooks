import React, { useState } from 'react';

const defaultList = [{ x: 1 }, { x: 2 }, { x: 3 }];

const addItemToList = (list) => [ { x: Math.random() * 100 }, ...list];

const UseState = () => {
    const [list, setList] = useState(defaultList);

    return (
        <div>
            <p>Add items to the list</p>
            <button onClick={ () => setList(addItemToList(list)) }>
                Click me
            </button>                   
            <ul>
                { 
                    list.map(item => <li key={ item.x }>{ item.x }</li>) 
                }
            </ul>
        </div>
    );
}

export default UseState;
