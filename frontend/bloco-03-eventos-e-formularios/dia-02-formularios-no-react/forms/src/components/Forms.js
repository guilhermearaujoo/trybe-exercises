import React, { Component } from "react";
import Option from './Option.js'

export default class Forms extends Component {
  constructor() {
    super();
    this.fileInput = React.createRef(); // handle uncontroled form input
  }

  state = {
    bestGame: "apex",
    name: "",
    age: "",
    textArea: "",
    terms: false,
  };

  handleInput = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  showFile = () => {
    console.log(this.fileInput.current.files[0].name);
  }

  render() {
    const { bestGame, name, age, textArea, terms } = this.state;
    return (
      <div>
        <h1>My First Form</h1>
        <form className="form">
          <fieldset>
            <legend>Infomation</legend>
            <Option 
            handleInput={this.handleInput} 
            bestGame={bestGame}
            />
            <label>
              Type your name:
              <input 
                type="text" 
                name="name" 
                onChange={this.handleInput} 
              />
            </label>

            <label>
              Type your age:
              <input 
                type="number" 
                name="age"
                onChange={this.handleInput} 
              />
            </label>
          </fieldset>
          
          <fieldset>
            <legend>Text and Archives</legend>
            <label>
              Type your birth place:
              <textarea
                maxLength={500}
                placeholder="São Paulo"
                name="textArea"
                onChange={this.handleInput}
              />
            </label>
            <input type="file" ref={this.fileInput} onChange={this.showFile}/>
          </fieldset>

          <label htmlFor="terms">
            Concorda com o envio?
            <input 
              type="checkbox" 
              onClick={this.handleInput} 
              name="terms" 
              value={terms} 
              id="terms"/>
          </label>

        </form>
      </div>
    );
  }
}
