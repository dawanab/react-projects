class App extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <div>
                <Colorful />
            </div>
        )
    }
}

/* Inline Style Example  */
class Colorful extends React.Component {
    render() {
        return(
            <div style={{color:"red", fontSize: 72}}>Big Red!</div>
        )
    }
}























ReactDOM.render(<App />, document.getElementById("root"));