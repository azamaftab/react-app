
import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super();
        this.state = {
            item: props
        }
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.state.item.name}</th>
                <td>{this.state.item.age}</td>
                <td>{this.state.item.subject}</td>
                <td>
                    <img src={this.state.item.image} width="50px" height="50px"></img>
                </td>
            </tr>
        );
    }
}
export default Card;