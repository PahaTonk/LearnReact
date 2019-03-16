import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Count = ({ counter, func, str = 'arg', num }) => {
  console.log( counter, func, str, num );
  return <h1>{`Number: ${counter}`}</h1>
}

Count.propTypes = {
  counter: PropTypes.number.isRequired,
  func: PropTypes.func,
  num: PropTypes.number,
  str: PropTypes.string,
}

Count.defaultProps = {
  func: () => {},
  num: 0,
}

class CountNumber extends Component {
  state = {
    counter : 0,
  }

  handleClick = (e) => {
    this.setState( ({ counter }) => ({
      counter : ++counter
    }) );
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <Count
          counter = {counter}
        />
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<CountNumber /> ,  document.getElementById('root'));
