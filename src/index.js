import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function LabelEl (props) {
    return (
      <label>
        <h3>{props.name}</h3>
        <input type={props.type} placeholder={props.name} value={props.nameStat} onChange={props.changeEl} style={props.styleName} key={props.keyEl} data-key={props.keyEl}/>
      </label>
    )
}

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {name : '', nameValid : false, age: '', ageValid : false, styleName : {}, styleAge : {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateInput(param1, nameStat, param2 , num, validStat, style) {
    if (param1 === nameStat && param2  > num) {
      this.setState({ [style] : {'borderColor':'green'} });
      this.setState({ [validStat] : true });
      return true;
    } else if (param1 === nameStat && param2  < num) {
      this.setState({[style] : {'borderColor':'red'}, [validStat] : false  });
      return false;
    }
    return null;
  }

  handleChange(e) {
    let [dataAttr, targetValLen, targetVal] = [e.target.dataset.key, e.target.value.length, e.target.value];
    dataAttr === 'name' ? this.validateInput(dataAttr, 'name', targetValLen, 2, 'nameValid', 'styleName') : this.validateInput(dataAttr, 'age', targetVal, 17, 'ageValid', 'styleAge');
    this.setState({[dataAttr] : targetVal});
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.nameValid !== true || this.state.ageValid !== true) return;
    alert('M-m-m-m Ni-i-i-ice!');
  }
  render() {
    const [titlenNameStat, titleAgeStat] = [this.state.name, this.state.age];
    const [styleNameStat, styleAgeStat] = [this.state.styleName, this.state.styleAge];
    const [handleChangeValidat, handleSubmitFunc] = [this.handleChange, this.handleSubmit];
    return (
      <form onSubmit={handleSubmitFunc}>
        <LabelEl type="text" name="Your name" keyEl="name" nameStat={titlenNameStat} changeEl={handleChangeValidat} styleName={styleNameStat}/>
        <LabelEl type="text" name="Your age" keyEl="age" nameStat={titleAgeStat} changeEl={handleChangeValidat} styleName={styleAgeStat}/>
        <input type="submit" />
      </form>
    )
  }
}

ReactDOM.render(<FormElement /> ,  document.getElementById('root'));
