import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  };

  render() {
    if (this.state.count % 2 === 1) {
      return <h1>This is a Book.</h1>;
    }
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

function Car(props) {
  const isHonda = props.isHonda;
  const isToyota = props.isToyota;
  let car;

  if (isHonda) {
    car = <h1>Honda</h1>;
  }
  if (isToyota) {
    car = <h1>Toyota</h1>;
  }
  if (!isHonda && !isToyota) {
    return null;
  }
  return (
    <div>
      <h1>This is band</h1>
      {car ? car : <h1>No Name</h1>}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldComp title={'Hello Component'} />
    <Car isHonda={true} />
    <Car isToyota={true} />
    <Car isToyota={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
