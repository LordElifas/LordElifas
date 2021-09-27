import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visibility: false,
            count: 0
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }))


    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }))


    }
    reset() {
        this.setState(state => ({
            count: 0
        }))


    }
    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility
        }))


    }
    render() {
        return (
            <div>
                <h1>Class component </h1>
                <h2>Current {this.state.count}</h2>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Ccomponent.defaultProps = {name: "Alex"}