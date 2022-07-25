// Functional Component Example
const App2 = () => {
    return(
        <div>
            <h1>React Functional Component</h1>
        </div>
    );
};

// Example of a Class Component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "Yo"
        };
    }

    onChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return(
            <div>
                <h1>React Class Component</h1>
                <input 
                value={this.state.value}
                type="text"
                onChange={this.onChange} />

                <p>{this.state.value}</p>
            </div>
        );
    }
}