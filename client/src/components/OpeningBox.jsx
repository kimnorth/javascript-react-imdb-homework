import React from 'react';
import OpeningList from './OpeningList.jsx';

class OpeningBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      films: [
        {film: "A Dog's Purpose", id: 1}, 
        {film: "Sleepless", id: 2}, 
        {film: "Mindhorn", id: 3},
        {film: "Unlocked", id: 4},
        {film: "The Journey", id: 5}
      ]
    }
  }


  render(){


    const divStyle = {
      color: 'blue',
      border: '1px solid grey',
      width: '40%'
    }

    return (

      <div className="opening-list-box" style={divStyle}>
        <h2>UK Opening This Week</h2>
        <OpeningList films = {this.state.films} />
        <br />
        <a href="#">See more opening this week</a>
      </div>

    )
  }

}

export default OpeningBox;