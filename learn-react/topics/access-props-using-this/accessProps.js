
class App extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <div>
                <Welcome name = "Dallen" />
            </div>
        );
    }

};



class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        )
    }
}


// Will be used if a name props is not entered. 
Welcome.defaultProps = {
    name: "Stranger"
}












ReactDOM.render(<App />, document.getElementById("root"));