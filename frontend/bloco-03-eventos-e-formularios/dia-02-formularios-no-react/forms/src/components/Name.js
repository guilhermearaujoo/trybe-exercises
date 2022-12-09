import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <label>
        Type your name:
        <input 
          type="text" 
          name="name" 
          onChange={handleInput} 
        />
      </label>
    )
  }
}
