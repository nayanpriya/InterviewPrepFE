import React from "react";
import Search from './Search.js';
import Table from './Table.js';
import Button from "./Button.js";
import axios from 'axios'
const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search?';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page='



export default class Listing extends React.Component {
    is_mounted = false
    constructor(props) {
        super(props)

        this.state = { result: null, serachedValue: DEFAULT_QUERY, page: 0, error: null }
    }


    componentDidMount() {
        this.is_mounted = true
        this.fetchSearchResult(this.state.serachedValue, this.state.page)
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    // if using arrow function , no need to bind it
    fetchSearchResult = (searchvalue, page) => {
        console.log(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchvalue}&${PARAM_PAGE}${page}`)
        const url = `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchvalue}&${PARAM_PAGE}${page}`
        axios(url)
            .then(response => response.json())
            .then(result => this.is_mounted && this.setResult(result))
            .catch(error => this.is_mounted && this.setState({ error }))
    }

    setResult = (result) => {
        console.log(result)
        const { hits, page } = result;
        const searchedvalue = this.state.serachedValue
        const oldhits = page !== 0 ? this.state.result.hits : []
        const updatedHits = [...oldhits, ...hits]
        this.setState({ result: { hits: updatedHits, page } })
        // this.setState({ result: { searchedvalue: { hits: updatedHits, page } } })// use for client side fetching
        console.log(this.state.result)
    }

    dismiss = (objectId) => {
        console.log(objectId)
        // var{list} = this.state  // samething as above using destructuring
        var updatedList = this.state.result.hits.filter((ele) => ele.objectID !== objectId)
        this.setState({ result: { hits: updatedList } })
    }

    searchBoxRender = (searchedvalue) => {
        console.log(searchedvalue)
        this.setState({ serachedValue: searchedvalue })
    }

    submitSearch = (event) => {
        console.log(this.state.serachedValue)
        event.preventDefault()

        this.fetchSearchResult(this.state.serachedValue, this.state.page)
    }

    renderList = (searchedvalue) => {
        var updatedList = this.state.result.hits.filter((element) =>
            element.title.toLowerCase().includes(searchedvalue)
        )
        console.log(updatedList)
        this.setState({ result: updatedList })
    }

    fetchNextData = () => {
        let page = this.state.page;
        page++
        this.setState({ page: page })
        const result = this.state.result
        // const valueArray = Object.keys(result)
        // if (valueArray.indexOf(this.state.serachedValue) > -1) {
        //     // render from result no new fetching of data if matches the key 
        //     for(each in valueArray){

        //     }

        // }
        // else {
        //     this.fetchSearchResult(this.state.serachedValue, page)
        // }
        this.fetchSearchResult(this.state.serachedValue, this.state.page)

    }

    render() {
        const { result, error } = this.state
        if (error) {
            return <p>Something went wrong.</p>;
        }
        return (

            <div className="list">
                <Search filter={this.searchBoxRender} submit={this.submitSearch}></Search>

                {/* {
                    list &&
                    <ul>
                        <Table list={result.hits} dismissRow={this.dismiss}></Table>
                    </ul>
                } */}
                {
                    result ?
                        <div>
                            <ul>
                                <Table list={result.hits} dismissRow={this.dismiss}></Table>
                            </ul>
                            <Button onClick={this.fetchNextData} name="More" ></Button>
                        </div>
                        : null
                }

            </div>)


    }
}

