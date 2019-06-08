import React from 'react';
import PropTypes from 'prop-types';

import { shouldNotUpdate } from './shouldNotUpdate';

export const UseEffect = React.memo(({ simpleProp, complexProp }) => (
    <div>
        <h3>Use Effects</h3>
        Simple prop: { simpleProp }
        <br /><br />
        Complex prop: { JSON.stringify(complexProp) }
    </div>
), shouldNotUpdate);

const { string, number, arrayOf, shape } = PropTypes;

UseEffect.defaultProps = {
    simpleProp: null,
    complexProp: []
}

UseEffect.propTypes = {
    simpleProp: number,
    complexProp: arrayOf(
        shape({
            id: number,
            name: string
        })
    )
}
