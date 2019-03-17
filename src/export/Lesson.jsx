import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyLink = ({ text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
)

MyLink.propTypes = {
  text : PropTypes.string,
  onClick : PropTypes.func.isRequired,
}
MyLink.defaultProps = {
  text : 'Link',
  onClick : () => {},
}

class App extends Component {

  handleClickNow = (e) => {
    console.log('Новый обработчик');
  }

  handleClick = (e, str) => {
    e.preventDefault();
    console.log(str);
    this.handleClickNow();
  }
  render () {
    return (
      <MyLink onClick={(e) => this.handleClick(e, 'Доп аргумент')}/>
    );
  }
}
export default App;
