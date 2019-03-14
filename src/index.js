import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const INTERVAL = 100;

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: 0}
  }

  increment() {
    this.setState({value: this.state.value + 1});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render () {
    const value = this.state.value;
    return (
      <div>
        <p>Таймер:</p>
        <ClockValue value={value} />
      </div>
    );
  }
}

function ClockValue(props) {
  const value = props.value;
  return (
    <p>
      <span>{Math.round(value/INTERVAL/60/60)} : </span>
      <span>{Math.round(value/INTERVAL/60)} : </span>
      <span>{Math.round(value/INTERVAL)} . </span>
      <span>{value % INTERVAL}</span>
    </p>
  )
}
function Application() {
  return (
    <p>
      <Timer/>
      <Timer/>
      <Timer/>
    </p>
  );
}
  ReactDOM.render(<Application />,  document.getElementById('root'));
//2.6.5 Нисходящий поток данных https://learn-reactjs.ru/basics/state-and-lifecycle
