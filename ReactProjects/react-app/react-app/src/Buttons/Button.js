import React from 'react'

export default class Button extends React.Component {



    render() {
        const { onClick, name, type } = this.props;

        return (<button onClick={onClick} type={type}> {name}</button >)
    }

}