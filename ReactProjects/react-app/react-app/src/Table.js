import React from "react";
import Button from './Button'

export default class Table extends React.Component {

    handleDismiss = (objectID) => {
        this.props.dismissRow(objectID)
    }


    render() {
        const { list } = this.props
        console.log(list)
        return (
            <div>
                {
                    list.map((item) => <li key={item.objectID} >
                        <span>{item.objectID}</span>
                        <span>{item.author}</span>
                        <span>{item.title}</span>
                        <span>{item.points}</span>
                        <span><Button id="dismiss_button" onClick={(e) => { this.handleDismiss(item.objectID) }}>Dismiss</Button></span>
                    </li>)
                }
            </div>
        )
    }

}