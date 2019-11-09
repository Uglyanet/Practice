import React, {Component} from 'react';
import './DeleteButton.css';


class DeleteButton extends Component {
  render() {
    const { handleDel } = this.props;
    const {num_of_row} = this.props;
    return (
      <div className="del_button">
          {/* <button onClick = {handleDel}>Delete {num_of_row + 1} row</button>  */}
          <button onClick = {() => { handleDel(num_of_row)}}>Delete {num_of_row + 1} row</button>
      </div>
    );
  }
}

export default DeleteButton;