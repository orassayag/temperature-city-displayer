import React from 'react';
import PropTypes from 'prop-types';
import './TemperatureDisplayer.less';

// Components parameter and functions PropTypes validations.
const propTypes = {
    display: PropTypes.bool,
    cityName: PropTypes.string.isRequired,
    temperature: PropTypes.number
};

// Components default values.
const defaultProps = {};

const TemperatureDisplayer = (props) => {
    return (
        <div className={`fancy ${props.display ? 'fadeIn' : 'fadeOut'}`}>{props.temperature ? (<span>{props.cityName}: {props.temperature}°C</span>) : null}</div>
    );
};

// Set the PropTypes validators and default values.
TemperatureDisplayer.propTypes = propTypes;
TemperatureDisplayer.defaultProps = defaultProps;

export default TemperatureDisplayer;