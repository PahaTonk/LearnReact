import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const Count = ({ counter }) => {
  return <h1>{`Number: ${counter}`}</h1>
}

export const  Button = () => (
   <button>Simple button</button>
)

export class CountNumber extends Component {
  static propTypes = {
    children: PropTypes.element,
    child: PropTypes.element,
  }
  static defaultProps = {
    children: null,
    child: null,
  }
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
    const { children, child } = this.props;
    return (
      <div>
        { child }
        <div>{ counter }</div>
        { React.cloneElement(children, {counter}) }
        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}
