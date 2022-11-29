import PropTypes from "prop-types"
import React from 'react';

// function showinfo() {
//   console.log(`This is a button`);
// }

export class Button extends React.Component {
  constructor() {
    super()
    this.showinfo = this.showinfo.bind(this); //permite mostrar o this e usar as props dentro da função
    this.state = {
      cliques: 0,
    }
  }

  // precisa do bind e do constructor
  showinfo() {
    // console.log(`Você clicou ${this.props.message}`);
    // variaveis que começão com _ indicam que são inutilizadas
    this.setState((before, _props) => (
      { cliques: before.cliques + 1 }
      ))
  }

  // nao precisa do binde nem do constructor
  showMoreInfo = () => {
    // console.log(`Você clicou ${this.props.message}`);
    this.setState((before, _props) => (
      { cliques: before.cliques + 1 }
      ))
  }

  render() {
    const { message } = this.props;
    // return (<button onClick={this.showMoreInfo}>{message}</button>);
    return (<button onClick={this.showMoreInfo}>{this.state.cliques}</button>)
  }
}

Button.propTypes = {
  message: PropTypes.string,
}

