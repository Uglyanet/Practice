import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';


class App extends Component {

  constructor(props) {
    super(props);
    // if (JSON.parse(localStorage.getItem("main_array"))) {
    //   localStorage.setItem("main_array", JSON.stringify([]));
    // }
    // localStorage.setItem("main_array", JSON.stringify([]));
    // this.state = {
    //   data: JSON.parse(localStorage.getItem("main_array")),
    // }
    this.state = {
      data: [
        { 'firstName': 'Max1', 'lastName': 'Bezvugliak', 'phone': '380683932929', 'age': '27' },
        { 'firstName': 'Max2', 'lastName': 'Bezvugliak', 'phone': '380683932929', 'age': '23' },
        { 'firstName': 'Max3', 'lastName': 'Bezvugliak', 'phone': '380683932929', 'age': '24' },
        { 'firstName': 'Max4', 'lastName': 'Bezvugliak', 'phone': '380683932929', 'age': '25' },
      ],
    }

  };

  handleAdd = (row) => {
    this.setState(this.state.data.splice(0, 0, row));
    console.log(this.state.data);
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
    console.log(JSON.parse(localStorage.getItem("main_array")));
  }

  handleDel = (row) => {
    this.setState(this.state.data.splice(row, 1));
    console.log(JSON.parse(localStorage.getItem("main_array")));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  sortingAge = () => {
    alert('sort, no ne sortiruet');
  }

  render() {
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd} />
        {this.state.data.length >= 1 &&
          <Table
            data={this.state.data}
            handleDel={this.handleDel}
            sortingAge={this.sortingAge}
          />}
      </div>
    );
  }
}

export default App;
