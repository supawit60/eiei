import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Input({ onKeyUp }) {
  return <input type="text" onKeyUp={onKeyUp} />;
}

class Form extends React.Component {
  state = { value: '' };

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.setState({ value: e.target.value });
      console.log(e.target.value.type);
    }
  };

  render() {
    return (
      <section>
        <Input onKeyUp={this.handleKeyUp} />
        <br />
        <ul>
          <li>{this.state.value}</li>
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
