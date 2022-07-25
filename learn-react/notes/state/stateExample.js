import React from "react";

class Greeting extends React.Component {
    state = {
        name: "World"
    };

    updateName() {
        this.setState({ name: "Dallas"});
    }

    render() {
        return(
            <div>{ this.state.name }</div>
        )
    }
}


// A Full Example 
class Bike extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            make: "Ferrari",
            model: "296 GTB",
            color: "White"
        };
    }

    changeBikeColor = () => {
        this.setState({ color: "Black" });
    }

    render() {
        return(
            <div>
                <h2>My {this.state.make}</h2>
                <p> It is a {this.state.color} {this.state.model}</p>
                <button type="button" 
                onClick={this.changeBikeColor}>Change color</button>
            </div>
        );
    }
}