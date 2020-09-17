import React from 'react'

export default class Button extends React.Component {



    render() {
        const { dismiss_button, onClick } = this.props;

        return (<button id={dismiss_button} onClick={onClick}> Dismiss</button >)
    }

}