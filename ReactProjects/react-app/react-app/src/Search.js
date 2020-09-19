import React from "react";
import Button from "./Button";




export default class Search extends React.Component {

    filteredList = (value) => {
        this.props.filter(value)

    }


    render() {
        return (
            <div>
                <form onSubmit={this.props.submit}>
                    <input id="autosuggetion" type="text" onChange={(e) => { this.filteredList(e.target.value) }}></input>
                    <Button name="submit" type="submit"></Button>
                </form>

            </div>
        )
    }

}