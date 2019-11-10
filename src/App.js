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

  };

  handleAdd = (row) => {
    this.setState(this.state.data.splice(0, 0, row));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  handleDel = (row) => {
    this.setState(this.state.data.splice(row, 1));
    // console.log(JSON.parse(localStorage.getItem("main_array")));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  sorting = (val) => {
    this.setState(this.state.data.sort(function (a, b) {
      switch (val) {
        case 'name': {
          if (a.firstName > b.firstName) {
            return 1;
          }
          if (a.firstName < b.firstName) {
            return -1;
          }
          return 0;
        }
        case 'surname': {
          if (a.lastName > b.lastName) {
            return 1;
          }
          if (a.lastName < b.lastName) {
            return -1;
          }
          return 0;
        }
        case 'phone': {
          if (a.phone > b.phone) {
            return 1;
          }
          if (a.phone < b.phone) {
            return -1;
          }
          return 0;
        }
        case 'age': {
          if (a.age > b.age) {
            return 1;
          }
          if (a.age < b.age) {
            return -1;
          }
          return 0;
        }
        default: break;

      }
    }));
  }

  render() {
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd} />
        {this.state.data.length >= 1 &&
          <Table
            data={this.state.data}
            handleDel={this.handleDel}
            sorting={this.sorting}
          />}
      </div>
    );
  }
}

export default App;
