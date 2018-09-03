
import React, { Component } from 'react';

import CardList from "../cards/cardList"


class Home extends Component {

  state = {
    cardData: [
      {
        id: 2014,
        name: 'azam',
        age: 26,
        subject: "chemistry",
        image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_640.png"
      },
      {
        id: 2015,
        name: "ali",
        age: 30,
        subject: "biology",
        image: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_640.png"
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <CardList cardData={this.state.cardData}></CardList>
      </div>
    );
  }
}
export default Home;