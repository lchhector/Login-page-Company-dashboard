import React from 'react';
import PropTypes from 'prop-types';

const Applications = ({ children, value, onChange }) => (
  <div>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onPress: onChange,
        currentValue: value,
      })
    ))}
  </div>
);

Applications.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Applications.defaultProps = {
  children: null,
};

export default Applications;
