import React, { Component } from "react";
import Option from './Option.js'
import Name from "./Name.js";

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
    formularioComErros: true,
  };

  handleInput = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    }, this.handleError);
  };

  handleError = () => {
    const { name, bestGame, age, textArea, terms } = this.state;

    // Criamos um array com os dados obrigatórios.
    // Note que estamos usando a propriedade length.
    // Caso o length seja 0, então !campo.length será
    // true
    const errorCases = [
      !name.length,
      !bestGame,
      !age.length,
      !textArea.length,
      !terms,
    ];

    // Caso haja algum campo que não seja true,
    // formularioPreenchido estará como false
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado
      // para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }

  showFile = () => {
    console.log(this.fileInput.current.files[0].name);
  }

  render() {
    const { bestGame, terms, formularioComErros } = this.state;
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
            <Name
            handleInput={this.handleInput}
            />

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
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}
