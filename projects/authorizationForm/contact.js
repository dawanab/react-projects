class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "goblin",
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    // authorize
    authorize(e) {
        const password = e.target.querySelector(
            "input[type = 'password']"
        ).value;
        const auth = password == this.state.password;
        this.setState({ authorized: auth });
    }

    render() {
        let login = (
            <form onSubmit={this.authorize} action="#">
                <input type="password" placeholder = "Password" />
                <input type="submit" />
            </form>
        );

        let contactInfo = (
            <ul>
                <li>client@example.com</li>
                <li>555.555.5555</li>
            </ul>
        );

        return(
            <div id="authorization">
                <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
                {this.state.authorized ? contactInfo : login}
            </div>
        )
    }
}

ReactDOM.render(
    <Contact />, document.getElementById("root")
);