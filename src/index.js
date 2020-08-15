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

ReactDOM.render(
  <React.StrictMode>
    <Toggle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
