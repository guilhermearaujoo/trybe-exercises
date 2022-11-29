import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class ButtonText extends Component {
  //essa função é assincrona
  showInfo = (message) => {
    this.setState((before, _props) => ({
      cliques: before.cliques + 1,
    }));

    //se não colocar o isso mostra o primiero clique como 0
    setTimeout(()=> {
      console.log(`No ${message} teve ${this.state.cliques}`);
    }, 100)
  };

  //declarando o state com Public Class Fields
  state = {
    cliques: 0,
  }

  render() {
    const { message } = this.props;
    return (
      <button onClick={() => this.showInfo(message)}>message</button>
    )
  }
}

ButtonText.propTypes = {
  message: PropTypes.string
}
