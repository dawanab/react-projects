// Embedding Expressions in JSX -------------------------------->
/* We can use any JS expression and use it in JSX by wrapping 
it in curly braces. */
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;


// Specifying Attributes with JSX ------------------------------->
/* You can use quotes to specify string literals as attributes.
   You may also use curly braces to embed a JS expression in an 
   attribute. */
const element2 = <a href="https://www.reactjs.org"> link </a>;
const element3 = <img src={user.avatarUrl}></img>;


// Rendering Elements ------------------------------------------->
/* An element describes what you want to see on the screen. */
const element4 = <h1>Hello, world</h1>;


// Function and Class Components -------------------------------->
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// OR

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

// Rendering a Component ----------------------------------------->
const element5 = <Welcome name="Sara" />;


