import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const Tab1 = () => {
  return <h2>Tab1</h2>;
}

const Tab2 = () => {
  return <h2>Tab2</h2>;
}

const Tab3 = () => {
  return <h2>Tab3</h2>;
}

class App extends Component {
  state = {
    activeTab : 1,
  }
  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.dataset.name,
    });
  }
  render() {
    const { activeTab } = this.state;
    const arr = ['Tab1', 'Tab2', 'Tab3'];
    return (
      <Fragment>
        {arr.map( (title, index) =>  {
          return <button data-name={index+1} key={`${index+1}key`} onClick={this.handleTab}>{title}</button>
        } )}
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
      </Fragment>
    );
  }
}
export default App;
