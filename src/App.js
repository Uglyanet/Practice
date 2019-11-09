import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  handleAdd = (row) => {
    this.setState(this.state.data.splice(0, 0, row));
    console.log(this.state.data);
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
    console.log(JSON.parse(localStorage.getItem("main_array")));
  }

  handleDel = (row) => {
    this.setState(this.state.data.splice(row, 1));
    // console.log(this.state.data);
    console.log(JSON.parse(localStorage.getItem("main_array")));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  render() {
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd} />
        {this.state.data.length >= 1 && <Table data={this.state.data} handleDel={this.handleDel} />}
      </div>
    );
  }
}

export default App;
