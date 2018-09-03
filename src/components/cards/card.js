
import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles =  ({
    cursorPointer: {
        cursor: 'pointer'
    }
});
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
                <td>
                    <div className="row">
                        <div className="col-sm-2" style={styles.cursorPointer}>
                            <FontAwesomeIcon icon="times" />
                        </div>
                        <div className="col-sm-2" style={styles.cursorPointer}>
                            <FontAwesomeIcon icon="pencil-alt" />
                        </div>
                    </div>
                </td>
            </tr >
        );
    }
}
export default Card;