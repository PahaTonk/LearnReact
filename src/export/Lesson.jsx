import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const TitleContext = React.createContext();

const LevelOne = () => <LevelTwo />;

const LevelTwo = () => <LevelThree />;

const LevelThree = () => (
  <TitleContext.Consumer>
    { ({title,subTitle}) => (
      <Fragment>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </Fragment>
    ) }
  </TitleContext.Consumer>
);

class Lesson extends Component {
  render() {
    return (
      <TitleContext.Provider value={ {title: 'Text1', subTitle: 'Text2'} }>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}

export default Lesson;
