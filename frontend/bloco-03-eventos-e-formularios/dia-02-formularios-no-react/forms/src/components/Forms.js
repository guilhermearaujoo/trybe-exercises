import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    bestGame: "apex",
    name: "",
    age: "",
    textArea: "",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { bestGame, name, age, textArea } = this.state;
    return (
      <div>
        <h1>My First Form</h1>
        <form className="form">
          <label>
            Best Games
            <select
              name="bestGame"
              onChange={this.handleInput}
              value={bestGame}
            >
              <option value="apex" name="apex">
                Apex
              </option>
              <option value="assassins" name="assassins">
                Assassins Creed
              </option>
              <option value="redDead" name="redDead">
                Red Dead Redemption 2
              </option>
            </select>
          </label>
          <label>
            Type your name:
            <input type="text" name="name" onChange={this.handleInput} />
          </label>
          <label>
            Type your age:
            <input type="number" name="age" onChange={this.handleInput} />
          </label>
          <label>
            Type your birth place:
            <textarea
              maxLength={500}
              placeholder="São Paulo"
              name="textArea"
              onChange={this.handleInput}
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}
