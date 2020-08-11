import React from 'react';
import "../App.css"
function Row(props){
    return(
        <tr>
            <td className = "td" >
                {props.name}
            </td>
            <td className = "td2">
                {props.title}
            </td>
            <td className = "td">
                {props.department}
            </td>
            <td className = "td2">
                {props.startDate}
            </td>
        </tr>
    )
}

export default Row;