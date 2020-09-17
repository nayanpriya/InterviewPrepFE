import React from "react";




export default class Search extends React.Component {

    filteredList = (value) => {
        this.props.filter(value)

    }


    render() {
        return (
            <form>
                <input id="autosuggetion" type="text" onChange={(e) => { this.filteredList(e.target.value) }}></input>
            </form>
        )
    }

}