class MyComponent extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "Initial State",
            visibility: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    handleClick() {
        this.setState({
            name: "React Rocks!"
        });
    };

    toggleVisibility() {
        this.setState(state => {
            if (state.visibility === true) {
                return state.visibility = false
            } else {
                this.handleClick()
                return state.visibility = true
            }
        });
    };

    render() {
        if (this.state.visibility) {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me!</button>
                    <h1>{this.state.name}</h1>
                    <h2>Now you see me!</h2>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.toggleVisibility}>Click Me!</button>
                    <h1>{this.state.name}</h1>
                </div>
            )
        }
    };

}



























ReactDOM.render(<MyComponent />, document.getElementById("root"));