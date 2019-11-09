import React, { Component } from 'react'
import './Table.css';
import DeleteButton from '../DeleteButton/DeleteButton';

class Table extends Component {
    render() {
        const { data } = this.props;
        const { handleDel } = this.props;
        let tableTemplate;

        function makeColumns(row) {
            return (
                <div>
                    <td headers="name" width="150px" > {row.firstName} </td>
                    <td headers="lastName" width="150px" > {row.lastName} </td>
                    <td headers="phone" width="150px" > {row.phone} </td>
                    <td headers="age" width="150px" > {row.age} </td>
                </div >
            );
        }

        tableTemplate = data.map((row, i) => {
            return (<tr key={i} > {makeColumns(row)} </tr>)
        })

        return (
            <div className="container_table_buttons">
                <div className="table" >
                    <table id="person_table" align="center">
                        <tbody>
                            <tr>
                                <th>
                                    <td id="name" width="149px" > First Name </td>
                                    <td id="lastName" width="150px" > Last Name </td>
                                    <td id="phone" width="150px" > Phone </td>
                                    <td id="age" width="149px" > Age </td>
                                </th >
                            </tr>
                            {tableTemplate}
                        </tbody >
                    </table>
                </div >
                <div className="array_of_delete_buttons">
                    {data.map((item, index) =>
                        <DeleteButton num_of_row={index} key={index} data={data} handleDel={handleDel} />
                    )}
                </div>
            </div>
        )
    }
}
export default Table;