import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// function /////////////////////////////////////////////
// Old Style
function WithOutJSX() {
  return React.createElement('h1', {}, 'Without JSX');
}
// Now
function WithJAX({ title }) {
  return <h1 alt={'test'}>With JSX, {title}</h1>;
}

// expresstion
function Expresstion1() {
  return <h1>1 + 1 = {1 + 1}</h1>;
}

function Expresstion2() {
  return (
    <h1>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </h1>
  );
}
// class //////////////////////////////////////////////
// Class Component
class HelloWorldComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: 'XX',
      etc: '',
    };
  }

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>
          {this.props.title} : {this.state.count}
        </p>
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <WithOutJSX />
    <WithJAX title="Hello Function" />
    <Expresstion1 />
    <Expresstion2 />
    <HelloWorldComp title={'Hello Component'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
