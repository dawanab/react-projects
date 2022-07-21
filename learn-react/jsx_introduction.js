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