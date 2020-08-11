import React from 'react';
import Row from './row'
import "../App.css"
const employeeData = [
    {
        name: "Matt Huginbother",
        title: "Accountant",
        department: "Finance",
        start_date: "07-12-2012"
    },
    {
        name: "Jane Roe",
        title: "Front End Developer",
        department: "Development",
        start_date: "05-31-2009"
    },
    {
        name: "John Sage",
        title: "Data Analyst",
        department: "Data",
        start_date: "10-23-2005"
    }
]

function Table({ headings, handleSort }) {
    return (
        <div className="table">
            <table
            id="table">
                    <thead>
                    <tr>
                     {headings.map(({name}) => {
                        return(
                            <th
                            key={name}
                            onClick={()=>{
                            handleSort(name.toLowerCase())}}
                            >                             
                        {name}
                        <div className="sorter">

                        </div> 
                        </th>
                        );
                })}
                </tr>
                </thead>
                        {/* <button>Sort Up</button>
                    </th>
                    <th>
                        Title
                     </th>
                    <th filterkey="department">
                        Department
                    </th>
                    <th filterkey="startDate">
                        Start Date
                    </th> */}
                {employeeData.map(employeeData => <Row name={employeeData.name} title={employeeData.title} department={employeeData.department} startDate={employeeData.start_date} />)}
            {/* </table>
        </div>
    ) */}
    </table>
    </div>

   
    )}
    



export default Table;