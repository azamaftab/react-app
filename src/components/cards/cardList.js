import React, { Component } from "react";

import Card from "./card"
class CardList extends Component {
    constructor(props) {
        super();
        this.state = {
            cardData: props.cardData
        }
    }

    render(props) {
        let cardContent = null;
        cardContent = (
            this.state.cardData.map((item, index) => {
                return <Card key={index} {...item}></Card>
            })
        );
        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cardContent}
                </tbody>
            </table>
        );
    }
}
export default CardList;