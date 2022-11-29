import React, { Component } from 'react'

export default class ButtonColor extends Component {
  state = {
    cliques: 0,
    color: "green",
  }

  setColor = () => {
    this.setState((before, _props) => ({
      cliques: before.cliques + 1,
      color: before.cliques % 2 !== 0 ? "green" : "blue",
    }), () => {
      console.log(`Botão 1 ${this.state.color} cliques ${this.state.cliques}`);
    })
  }

  render() {
    return (
      <button style={{background: this.state.color, color:"white" }} onClick={this.setColor}>{this.state.cliques}</button>
    )
  }
}
