import React from "react";
import { Button } from './Buttons'

export default class Table extends React.Component {

    handleDismiss = (objectID) => {
        this.props.dismissRow(objectID)
    }


    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map((item) => <li key={item.objectID} >
                        <span>{item.objectID}</span>
                        <span>{item.author}</span>
                        <span>{item.title}</span>
                        <span>{item.points}</span>
                        <span><Button name="Dismiss" onClick={(e) => { this.handleDismiss(item.objectID) }}></Button></span>
                    </li>)
                }
            </div>
        )
    }

}