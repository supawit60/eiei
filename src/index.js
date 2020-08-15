import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class InputComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    alert(`Your name is ${this.state.name}`);
  };

  render() {
    const { firstName, lastName } = this.state;
    const name = `${firstName} ${lastName}`.trim();
    const header = name ? <h1>Hello {name}</h1> : null;
    return (
      <form onSubmit={this.onSubmit}>
        {header}
        <div>
          <input
            name="firstName"
            value={this.state.fristName}
            onChange={this.onChange}
          ></input>
          <br></br>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          ></input>
        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <InputComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
