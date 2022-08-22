class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
               <WillMount />
               <MyComponent />
               <Controller />
            </div>
        )
    }
}

/* =========================== componentWillMount ========================= */
class WillMount extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount()");
    };

    render() {
        // Have console open to see this; Happens before component is rendered
        return <div />
    }
}


/* =========================== componentDidMount ========================= */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUsers: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1206
            });
        }, 2500);
    }

    render() {
        return(
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        )
    }
}


/* ========================== shouldComponentUpdate ======================== */
class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should I update? ...");
        if (nextProps.value % 2 == 0) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        console.log("Component re-rendered");
    }

    render() {
        return <div>{this.props.value}</div>
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }

    render() {
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById("root"));
