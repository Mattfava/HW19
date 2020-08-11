import React from 'react';
import Row from './row'
import "../App.css"


function Table(props) {
    var filter = props.employeeData.filter((employeeData)=>
    employeeData.name.toLowerCase().includes(props.search.toLowerCase())
    );

    return (
        <div className="table">
            <table className="myTable">
                    <th>
                        Name
                    </th>
                    <th>
                        Title
                     </th>
                    <th>
                        Department
                    </th>
                    <th>
                        Start Date
                    </th>
                {filter.map(employeeData => <Row name={employeeData.name} title={employeeData.title} department={employeeData.department} startDate={employeeData.start_date} />)}
            
    </table>
    </div>

   
    )}
    



export default Table;