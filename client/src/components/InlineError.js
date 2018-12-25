import React from 'react';
import Proptypes from 'prop-types';

const InlineError = ({ text }) => <span style={{ color: "#ae5856" }}>{text}</span>

InlineError.prototype = {
    text: Proptypes.string.isRequired
}
export default InlineError
