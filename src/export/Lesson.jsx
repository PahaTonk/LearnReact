import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: 'Front-end',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
     inputText: value
   });
  }

  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
     textareaText: value
   });
  }

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value
    });
  }


  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: 'Front-end',
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
              <input type="text" name="name" value={inputText} onChange={this.handleInputChange} />
            </label><br />
            <label htmlFor="text">Text:</label>
            <textarea id="text"
              value={textareaText}
              onChange={this.handleTextareaChange} /><br />
            <select value={selectText}
              onChange={this.handleSelectChange}>
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
