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
    return (

      <div className="opening-list-box">
        <OpeningList films = {this.state.films} />
      </div>

    )
  }

}

export default OpeningBox;