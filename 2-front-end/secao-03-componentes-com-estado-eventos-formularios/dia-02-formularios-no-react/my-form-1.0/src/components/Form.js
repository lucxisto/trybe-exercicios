import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      tellMe: '',
      birthday: '',
      confirmation: false,
      isIt: '',
    }

    this.tellMeWhat = this.tellMeWhat.bind(this);
  }

  tellMeWhat({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    return (
      <>
        <form>
          <label>Me diga</label>
          <textarea name='tellMe' onChange={this.tellMeWhat}>
          </textarea>
          <input type="date" name='birthday' onChange={this.tellMeWhat} />
          <input type="checkbox" name='confirmation' onChange={this.tellMeWhat} />
          <select name='isIt' onChange={this.tellMeWhat}>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </form>
      </>
    )
  }
}

export default Form;