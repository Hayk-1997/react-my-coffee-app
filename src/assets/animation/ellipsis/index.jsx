import React from 'react';
import PropTypes from 'prop-types';
import './elipsis.styles.css';

const Ellipsis = ({ style }) => (
  <>
    <div className="lds-ellipsis" style={style}>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  </>
);

Ellipsis.propTypes = {
  style: PropTypes.object
};

export default Ellipsis;