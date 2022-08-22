class ControlledInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        return(
            <div>
                <h1>I. Controlled Input</h1>
                <input value={this.state.input} onChange = {this.handleChange}></input>
                <h4>Controlled Input: </h4>
                <p>{this.state.input}</p>

                <br />
                <hr />
                

                <h1>II. Create a Controlled Form</h1>
                <MyForm />

                <br />
                <hr />

                <h1>III. Pass State as props to Child Components</h1>
                <MyApp />
            </div>
        )
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            submit: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value 
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.input} 
                           onChange = {this.handleChange} />
                    <button type = "submit">Submit!</button>
                </form>

                <h1>{this.state.submit}</h1>
            </div>
        )
    }
}

/////////////////////////////////////////////////////////////////////////

class MyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "CamperBot"
        }
    }

    render() {
        return(
            <div>
                <Navbar name = {this.state.name} />
            </div>
        )
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Hello, my name is {this.props.name}</h1>
            </div>
        )
    }
}




















ReactDOM.render(<ControlledInput />, document.getElementById("root"));