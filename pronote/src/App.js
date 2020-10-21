import React, { Component } from 'react'
import Editor from './components/Editor'
import ProNote from './components/ProNote'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            value: " "
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState(
            { value: e.target.value }
        )
    }

    render() {
        return (
            <React.Fragment>
                <Editor handleChange={this.handleChange} />
                <ProNote state={this.state} />
            </React.Fragment>
        )
    }
}