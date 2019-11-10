import React, { Component } from 'react'
import './Table.css';
import SortButtons from '../SortButtons/SortButtons';

class Table extends Component {
    render() {
        const { data, handleDel, sorting } = this.props;
        let tableTemplate;

        function makeColumns(row, i) {
            const { firstName, lastName, phone, age } = row;
            return (
                <div>
                    <td headers="name" width="150px" > {firstName} </td>
                    <td headers="lastName" width="150px" > {lastName} </td>
                    <td headers="phone" width="150px" > {phone} </td>
                    <td headers="age" width="150px" > {age} </td>
                    <td id="delete_point" onClick={() => { handleDel(i) }} headers="delete" width="150px" > Delete row</td>
                </div >
            );
        }

        tableTemplate = data.map((row, i) => {
            return (<tr key={i} > {makeColumns(row, i)} </tr>)
        })

        return (
            <div className="container_table_buttons">
                <div className="table" >
                    <table id="person_table" align="center">
                        <tbody>
                            <tr>
                                <th>
                                    <td id="name" width="149px" > First Name
                                       <SortButtons sorting={sorting} value="firstName" />
                                    </td>
                                    <td id="lastName" width="150px" > Last name
                                        <SortButtons sorting={sorting} value="lastName" />
                                    </td>
                                    <td id="phone" width="150px" > Phone
                                        <SortButtons sorting={sorting} value="phone" />
                                    </td>
                                    <td id="age" width="150px" > Age
                                        <SortButtons sorting={sorting} value="age" />
                                    </td>
                                    <td id="delete" width="149px" > Delete button </td>
                                </th >
                            </tr>
                            {tableTemplate}
                        </tbody >
                    </table>
                </div >
            </div>
        )
    }
}
export default Table;