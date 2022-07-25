import React from "react";
import ReactDOM from "react-dom";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "Hello!" };
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    switchState() {
        this.setState({ value: "Bye!" });
    }

    render() {
        return(
            <div>
                <h1>Greeting from Alabama, {this.state.value}</h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Click Me!</a>
                </h2>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {

        console.log("componentWillUpdate()");
    
      }
    
      componentDidUpdate() {
    
        console.log("componentDidUpdate()");
    
      }
    
    }
    
ReactDOM.render(<Demo />, document.getElementById("root"));
