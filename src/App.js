import React, {Component} from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
