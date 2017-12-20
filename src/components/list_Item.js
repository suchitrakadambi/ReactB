import React, { Component } from "react"

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.updateState = this.updateState.bind(this);
        console.log(this.props.value);
        this.state = {
            value: this.props.value,
            shouldUpdate: this.props.shouldUpdate
        };
    }

    handleClick() {
        let current = this.props.value;
    }

    handleEdit() {
        let currentEdit = this.props.value;
    }

    updateState(event) {
        this.setState({ value: event.target.value })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }
    render() {
        return (

            <div className="container" style={{margin:"15px",width:"1000px" }}>
                <div className = "row" style={{}}>
                    <div className = "col-md-1">
                    <span style={{fontSize:"25",fontWeight:"400"}}> {this.props.index + 1} :</span>
                    </div>
                    <div className = "col-md-8">
                    <input value={this.state.value} onChange={this.updateState} className="myinput" />
                    </div>
                    <div className = "col-md-2">
                    <div className = "row">
                        <div className = "col-md-6">
                        <button className="btn btn-success" onClick={() => this.props.onListValueChanged(this.props.index, this.state.value)}>Save</button>
                        </div>
                        <div className = "col-md-6">
                        <button className="btn btn-danger" onClick={() => this.props.onDeleteListValue(this.props.index, this.state.value)}>Delete</button> 
                        </div>
                    </div>
                    </div>
                </div>
                
               
               
            </div>
        )
    }
}
export default ListItem