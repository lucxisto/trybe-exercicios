import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliquesOne: 0,
      numeroDeCliquesTwo: 0,
      numeroDeCliquesThree: 0,
    };

    this.clickingEventOne = this.clickingEventOne.bind(this);
    this.clickingEventTwo = this.clickingEventTwo.bind(this);
    this.clickingEventThree = this.clickingEventThree.bind(this);
  };

  

  clickingEventOne = () => {
    this.setState((cliquesAnteriores, _props) => ({
      numeroDeCliquesOne: cliquesAnteriores.numeroDeCliquesOne + 1,
    }));
    console.log(`po bicho 1`);
  };
  clickingEventTwo = () => {
    this.setState((cliquesAnteriores, _props) => ({
      numeroDeCliquesTwo: cliquesAnteriores.numeroDeCliquesTwo + 1,
    }));
    console.log(`po bicho2`);
  };
  clickingEventThree = () => {
    this.setState((cliquesAnteriores, _props) => ({
      numeroDeCliquesThree: cliquesAnteriores.numeroDeCliquesThree + 1,
    }));
    console.log(`po bicho3`);
  };

  render() {
    const { numeroDeCliquesOne, numeroDeCliquesTwo, numeroDeCliquesThree  } = this.state;
    return(
      <div>
        <button onClick={this.clickingEventOne}>click here {numeroDeCliquesOne}</button>
        <button onClick={this.clickingEventTwo}>don't click here {numeroDeCliquesTwo}</button>
        <button onClick={this.clickingEventThree}>fake click here {numeroDeCliquesThree}</button>
      </div>
    );
  }
}

export default App;
