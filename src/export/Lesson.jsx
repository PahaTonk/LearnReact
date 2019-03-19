import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const Preloader = () => {
  return <h1>Preloader</h1>
}

const AddHello = ({ data : { text } }) => {
  return <h1>{text}</h1>
}

class Lesson extends Component {
  state = {
    data : {}
  }

  answerServer = () => {
    setTimeout( () => {
      this.setState({ data : {
        load: true,
        text: 'Hello!'
      } });
    }, 3000 );
  }

  render() {
    const { data } = this.state;
    this.answerServer();
    return (
      <Fragment>
        {!Object.keys(data).length ? <Preloader /> : <AddHello {...this.state} />}
      </Fragment>
    );
  }
}

export default Lesson;
