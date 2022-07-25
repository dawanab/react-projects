// Here we have a parent component, including another child component

class Parent extends Component {
    render() {
        return(
            <h1>the parent Component
                <Child text = {"Child 1"} />
                <Child text = {"Child 2"} />
                <Child tetx = {"Child 3"} />
            </h1>
        );
    }
}

// Child component 
const ChildComponent = () => {
    return <p>Child 1</p>
};

class ParentComponent extends Component {
    render() {
        return(
            <h1>the parent component
                <Child text = {"Im the 1st child"} />
                <Child />
                <Child />
            </h1>
        );
    }
}

const Child = (props) => {
    return <p>{props.text}</p>;
}

/*  
The component will output the same string multiple times, but we can also assign 
a different string to each output while calling the child component. */

// 1 - We can assign data to React components while calling them in this way:
// <Child attr1 = {value} attr2={value} />


