import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
        };
    }

    componentDidMount() {
       this.timerId =  setInterval(() => {this.setState({date : new Date()})}, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                {
                    this.props.children
                }
            </div>

        );
    }
}

export default Clock;
