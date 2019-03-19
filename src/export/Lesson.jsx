import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MyPortal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Lesson extends Component {
  state = {
    counter: 0
  }
  handleClick = (e) => {
    this.setState( ({counter}) => ({counter: counter+1 }) );
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <span>{this.state.counter}</span>
        <MyPortal>
          <div>TEST PORTAL</div>
          <button>Click</button>
        </MyPortal>
      </div>
    );
  }
}

export default Lesson;
