import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClickEvent = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((p) => ({ isToggleOn: !p.isToggleOn }));
  };

  render() {
    return (
      <button onClick={this.handleClickEvent}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

class InputComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'input value ',
    };
  }

  onChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  onSubmit = (event) => {
    event.preventDefault();
    alert(`Your name is ${this.state.name}`);
  };

  render() {
    const { name } = this.state;
    const header = name ? <h1>Hello {name}</h1> : null;
    return (
      <form onSubmit={this.onSubmit}>
        {header}
        <input value={this.state.name} onChange={this.onChange}></input>
      </form>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Toggle />
    <br></br>
    <InputComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
