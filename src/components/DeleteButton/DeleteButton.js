import React, {Component} from 'react';
import './DeleteButton.css';


class DeleteButton extends Component {

 deleteRow=()=>{
   alert("LOL");
  //  data.splice(0, 1);
  //  alert(data);
 }

  render() {
    const { data } = this.props;
    return (
      <div className="del_button">
          <button onClick = {this.deleteRow}>Delete {this.props.num_of_row} row</button>
      </div>
    );
  }
}

export default DeleteButton;