import React from 'react';
import PropTypes from 'prop-types';

const DumbComponentA = ({ children }) => <div data-name="dumb component">{ children }</div>

DumbComponentA.defaultProp = {
    children: null
};

DumbComponentA.prototype = {
    children: PropTypes.reactNode
}

export default DumbComponentA;
