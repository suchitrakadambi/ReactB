import React, { Component } from "react";
import ListItem from "./list_Item";

export default class List extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.shouldUpdate + "in list");
    }

    render() {
        const mycheck = this.props.dataArray.map((singleData, index) => {
        })

        const newList = this.props.dataArray.map((individualData, index) =>
            <ListItem key={index} value={individualData} index={index}
                onListValueChanged={this.props.onListValueChanged} onDeleteListValue={this.props.onDeleteListValue} />);
        return (
            <div>
                <ul>{newList}</ul>
            </div>
        );
    }

}