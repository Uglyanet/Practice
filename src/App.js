import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("main_array")) ?
        JSON.parse(localStorage.getItem("main_array")) : [],
    }

  };

  handleAdd = (row) => {
    this.setState(this.state.data.splice(0, 0, row));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  handleDel = (row) => {
    this.setState(this.state.data.splice(row, 1));
    localStorage.setItem("main_array", JSON.stringify(this.state.data));
  }

  sorting = (val, dir) => {
    this.setState(this.state.data.sort(function (a, b) {
      if (a[val] > b[val]) {
        if (dir === 1) { return 1; } else { return -1; }
      }
      if (a[val] < b[val]) {
        if (dir === 1) { return -1; } else { return 1; }
      }
      return 0;
    }
    ));
  }

  render() {
    const { data } = this.state;
    const { handleAdd, handleDel, sorting } = this;
    return (
      <div className="App">
        <Form handleAdd={handleAdd} />
        {data.length >= 1 &&
          <Table
            data={data}
            handleDel={handleDel}
            sorting={sorting}
          />}
      </div>
    );
  }
}

export default App;
