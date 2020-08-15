import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class HelloWorldComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onAdd = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const numbers = [];
    for (let i = 1; i <= this.state.count; i++) {
      numbers.push(<li key={i}>{i % 2 === 0 ? 'even' : 'odds'}</li>);
    }
    return (
      <div>
        <button onClick={this.onAdd}>Add</button>
        <ul>{numbers}</ul>
      </div>
    );
  }
}

function ItemList(props) {
  const items = [];
  for (let i = 0; i < props.numbers.length; i++) {
    items.push(<li>{i}</li>);
  }
  return (
    <ul>
      {props.numbers.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldComp title={'Hello Component'} />
    <ItemList numbers={numbers} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
