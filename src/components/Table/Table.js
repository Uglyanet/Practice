import React, { Component } from 'react'
import './Table.css';
import SortButtons from '../SortButtons/SortButtons';

class Table extends Component {
    render() {
        const { data, handleDel, sorting } = this.props;
        let tableTemplate;
        tableTemplate = data.map((row, i) => {
            const { firstName, lastName, phone, age } = row;
            return (<tr key={i} >
                <td headers="name" width="150px" >{firstName}</td>
                <td headers="lastName" width="150px" >{lastName}</td>
                <td headers="phone" width="150px" >{phone}</td>
                <td headers="age" width="150px" >{age}</td>
                <td id="delete_point" onClick={() => { handleDel(i) }} headers="delete" width="150px" > Delete row</td>
            </tr>
            )
        })

        return (
            <div className="container_table_buttons">
                <div className="table" >
                    <table id="person_table" align="center">
                        <tbody>
                            <tr>
                                <th id="name" width="149px" > First Name
                                       <SortButtons sorting={sorting} value="firstName" type="string" />
                                </th>
                                <th id="lastName" width="150px" > Last name
                                        <SortButtons sorting={sorting} value="lastName" type="string" />
                                </th>
                                <th id="phone" width="150px" > Phone
                                        <SortButtons sorting={sorting} value="phone" type="string" />
                                </th>
                                <th id="age" width="150px" > Age
                                        <SortButtons sorting={sorting} value="age" type="num" />
                                </th>
                                <th id="delete" width="149px" > Delete button </th>
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