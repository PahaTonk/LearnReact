import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const ValidationMsg = ({ val }) => {
  if (val === 1) {
    return <h2>Tab1</h2>;
  } else if (val === 2) {
    return <h2>Tab2</h2>;
  } else {
    return <h2>Tab3</h2>;
  }
}

ValidationMsg.propTypes = {
  val : PropTypes.number.isRequired,
}

class App extends Component {
  state = {
    name : 1,
  }
  handleTab = (e) => {
    this.setState({
      name: +e.target.dataset.name,
    });
  }
  render() {
    const arr = ['Tab1', 'Tab2', 'Tab3'];
    return (
      <Fragment>
        {arr.map( (title, index) =>  {
          return <button data-name={index+1} key={`${index+1}key`} onClick={this.handleTab}>{title}</button>
        } )}
        <ValidationMsg val={this.state.name} />
      </Fragment>
    );
  }
}
export default App;
