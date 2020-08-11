import React from 'react';
import "../App.css"
function Row(props){
    return(
        <tr>
            <td className = "td cell" >
                {props.name}
            </td>
            <td className = "td cell">
                {props.title}
            </td>
            <td className = "td cell">
                {props.department}
            </td>
            <td className = "td cell">
                {props.startDate}
            </td>
        </tr>
    )
}

export default Row;