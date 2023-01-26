import React from 'react';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };

    
  };

  changButtonColor = (clicksNumber) => clicksNumber % 2 === 0 ? 'green' : 'white';

  clickingEvent = () => {
    const { numeroDeCliques } = this.state;
    this.setState((cliquesAnteriores, _props) => ({
      numeroDeCliques: cliquesAnteriores.numeroDeCliques + 1,
    }),() => {
      console.log(`Botão ${this.changButtonColor(numeroDeCliques)}`);
    });
  };

  render () {
    const { numeroDeCliques } = this.state;
    return(
      <button onClick={this.clickingEvent}
          style={ { backgroundColor: this.changButtonColor(numeroDeCliques) } }>
            click here {numeroDeCliques}
      </button>
    )
  }
}

export default Button;
