import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Input({ onKeyPress }) {
  return <input type="text" onKeyPress={onKeyPress} />;
}

class Form extends React.Component {
  state = { value: '' };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        value: e.target.value,
      });
    }
  };

  render() {
    return (
      <section>
        <Input onKeyPress={this.handleKeyPress} />
        <br />
        <ul>
          <li>{this.state.value}</li>
          <li>
            {Number.isNaN(Number(this.state.value))
              ? 'Not Number'
              : this.state.value}
          </li>
        </ul>
      </section>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
