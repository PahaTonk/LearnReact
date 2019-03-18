import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ValidationMsg = ({ val }) => {
  if(val >= 10) {
    return <h2>Good</h2>;
  } else {
    return <h3>{`Bad. ${val} < 10 `}</h3>;
  }
}

const App = () => {
  const val = 8;
  return (
    <div>
      <ValidationMsg val={8} />
      {val >= 10 ? <h2>Good</h2> : <h3>{`Bad. ${val} < 10 `}</h3>}
      {val && <h2>{`${val} is true`}</h2>}
    </div>
  )
}
export default App;
