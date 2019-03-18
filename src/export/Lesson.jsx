import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  getRef = node => this.el = node;
  textareaRef = React.createRef();
  selectRef = React.createRef();

  handleChange = ({ target: { value } }) => {
    this.setState({
      inputText: this.el.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value
   });
  }


  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    });
  }

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
      <Fragment>
          <form>
            <label>
              Name:<br />
              <input type="text" name="name"
               value={inputText}
               ref={this.getRef}
               onChange={this.handleChange} />
            </label><br />
            <label htmlFor="text">Text:</label>
            <textarea id="text"
              value={textareaText}
              ref={this.textareaRef}
              onChange={this.handleChange} /><br />
            <select value={selectText}
              ref={this.selectRef}
              onChange={this.handleChange}>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
            </select>
            <button onClick={this.handleShow}>Show</button>
          </form>
          {name && <h2>{name}</h2>}
          {text && <h2>{text}</h2>}
          {position && <h2>{position}</h2>}
      </Fragment>
    );
  }
}

export default Form;
