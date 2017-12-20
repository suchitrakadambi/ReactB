import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from "./components/list"

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            data: [],
            shouldUpdate: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onListValueChanged = this.onListValueChanged.bind(this);
        this.onDeleteListValue = this.onDeleteListValue.bind(this);
        this.keydown = this.keydown.bind(this);
    }


    handleSubmit(event) {
        this.setState((prevState) => {
            if (prevState.input.length) {
                return { data: [...prevState.data, prevState.input], input: "" };
            }

        }
        );
    }
    keydown(event) {
        console.log(event.key);
        if (event.key == 'Enter') {
            console.log("pressed the enter key");
            this.setState((prevState) => {
                if (prevState.input.length) {
                    return { data: [...prevState.data, prevState.input], input: "" };
                }

            }
            );
        }
    }

    onListValueChanged(index, value) {
        console.log("onListValueChanged(" + index + ", " + value + ")");
        this.state.data[index] = value;
        console.log(this.state.data);

    }
    onDeleteListValue(index, value) {
        console.log("the index" + " " + index + " " + "value" + " " + value);
        var currentState = this.state.data;
        console.log("the Current state is" + currentState);
        this.state.data.splice(index, 1);
        console.log(currentState);
        this.setState({
            data: currentState
        })
        console.log(this.state.data);
    }

    render() {
        console.log(this.state.shouldUpdate);
        return (

            <div className="container mycontainer">
                <div className="text-capitalize myheading">
                    <h3>Create your todo list</h3>
                    <span>(edited should be saved)</span>
                </div>
                <div className="row" style= {{margin:"20px"}}>
                    <div className="col-md-10">
                        <input
                            type="text"
                            value={this.state.input}
                            onChange={(event) => this.setState({ input: event.target.value })}
                            className="form-control"
                            id="email"
                            placeholder="Enter your TODO list"
                            onKeyDown={this.keydown} />
                    </div>
                    <div className="col-md-2">
                        <button
                            className="btn btn-info"
                            onClick={this.handleSubmit}
                        >CREATE</button>
                    </div>

                </div>
                <List dataArray={this.state.data} onListValueChanged={this.onListValueChanged} onDeleteListValue={this.onDeleteListValue} />
            </div>
        );
    }
}

ReactDOM.render(<Create />, document.getElementById("container"));