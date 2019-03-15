import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TimeMinsk extends Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date(), name: 'Pavel'}
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps()");
  }
  
  componentWillMount(){
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.timerId);
  }

  shouldComponentUpdate(){
      console.log("shouldComponentUpdate()");
      return true;
  }

  componentWillUpdate(){
      console.log("componentWillUpdate()");
  }

  componentDidUpdate(){
      console.log("componentDidUpdate()");
  }

  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return(
      <div>
        <h1>Hello, {this.state.name}</h1>
        <h2>Time - {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
  ReactDOM.render(<TimeMinsk  />,  document.getElementById('root'));
