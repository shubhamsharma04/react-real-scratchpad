import React, {Component} from 'react';

class Toggler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            toggleState: 'Y'
        }
    }

    handleClick = () => {
        if (this.state.isClicked) {
            this.setState({isClicked: false, toggleState: 'Y'});
        } else {
            this.setState({isClicked: true, toggleState: 'X'});
        }
    }

    render() {
        return (
            <div class="toggler-div">
                <p>{this.state.toggleState}</p>
                <button onClick={this.handleClick}>Toggle it</button>
            </div>
        )
    };

}

export default Toggler;