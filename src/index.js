import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {class: "off", label: "Click", style: {"backgroundColor":"red"}};

    this.press = this.press.bind(this);
  }
  press (e) {
    console.log(e);
    let className = this.state.class === "off" ? "on" : "off";
    let styleBut = className === "on" ? {"backgroundColor":"green"} : {"backgroundColor":"red"};
    this.setState({style: styleBut});
    this.setState({class: className});
  }
  render() {
    return (
      <div>
      <button onClick={this.press} className={this.state.class} style={this.state.style}>{this.state.label}</button>
      <CountNumber label={`${this.state.label} Count`} />
      </div>
    )
  }
}
class CountNumber extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: 0};
    this.pressBut = this.pressBut.bind(this);
  }
  pressBut () {
    console.log(this.state.value);
    this.setState({value: this.state.value+1});
    console.log(this.state.value);
  }
  render () {
    return(
      <div>
        <h2 style={{color:'blue',fontSize: '15px'}}>{this.state.value}</h2>
        <button onClick={this.pressBut}>{this.props.label}</button>
      </div>
    )
  }
}
  ReactDOM.render(<ClickButton />,  document.getElementById('root'));
