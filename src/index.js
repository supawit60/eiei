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
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
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
    <HelloWorldComp title={'Hello Component'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
