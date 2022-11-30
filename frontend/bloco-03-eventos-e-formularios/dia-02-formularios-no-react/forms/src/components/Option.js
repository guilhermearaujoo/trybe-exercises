import React, { Component } from "react";

export default class Option extends Component {
  render() {
    const { handleInput, bestGame } = this.props;
    return (
      <label>
        Best Games
        <select name="bestGame" onChange={handleInput} value={bestGame}>
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
    );
  }
}
