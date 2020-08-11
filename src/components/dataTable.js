import React, { Component } from 'react';
import Table from './table';
import {render} from 'react-dom'

export default class dataTable extends Component {
    state = {
        name: "",
        title: "",
        department: "",
        start_date: ""
    }

    headings = [
        { name: "dob" },
        { name: "phone"}
    ]

    handleSort = headings => {
        if (this.state.order === "ascend") {
            this.setState({
                order: "ascend"
            })
        }
        render() 
            return (
                
                <>
                <div>
                <Table headings={this.headings}/>
                </div>
                </>
            )
        }
    }

