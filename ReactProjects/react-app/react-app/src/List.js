import React from "react";
import Search from './Search.js';
import Table from './Table.js';
const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';
const PARAM_SEARCH = 'query=';
const url = `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}`

// const list = [
//     {
//         title: 'React',
//         url: 'https://reactjs.org/',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 0,
//     },
//     {
//         title: 'Redux',
//         url: 'https://redux.js.org/',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 1,
//     },
// ];
export default class Listing extends React.Component {

    constructor(props) {
        super(props)
        this.state = { list: null, serachedValue: DEFAULT_QUERY }
    }


    componentDidMount() {
        this.fetchSearchResult()
    }


    // if using arrow function , no need to bind it
    fetchSearchResult = () => {
        console.log(url + this.state.serachedValue)
        fetch(url + this.state.serachedValue)
            .then(response => response.json())
            .then(result => this.setResult(result))
            .catch(e => e)
    }

    setResult = (result) => {
        this.setState({ list: result.hits })
    }

    dismiss = (objectId) => {
        console.log(this)
        console.log(objectId)
        var list = this.state.list
        // var{list} = this.state  // samething as above using destructuring
        var updatedList = list.filter((ele) => ele.objectID !== objectId)
        this.setState({ list: updatedList })
    }

    searchBoxRender = (searchedvalue) => {
        console.log(searchedvalue)
        this.setState({ serachedValue: searchedvalue })
        this.fetchSearchResult()
    }

    renderList = (searchedvalue) => {
        var updatedList = this.state.list.filter((element) =>
            element.title.toLowerCase().includes(searchedvalue)
        )
        console.log(updatedList)
        this.setState({ list: updatedList })
    }

    render() {
        const { list } = this.state



        return (
            <div className="list">
                <Search filter={this.searchBoxRender}></Search>
                {
                    list ?
                        <ul>
                            <Table list={list} dismissRow={this.dismiss}></Table>
                        </ul> : null
                }

            </div>)


    }
}

