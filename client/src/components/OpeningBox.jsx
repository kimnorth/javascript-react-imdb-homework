import React from 'react';
import OpeningList from './OpeningList.jsx';

class OpeningBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      films: [
        {film: "A Dog's Purpose"}, 
        {film: "Sleepless"}, 
        {film: "Mindhorn"},
        {film: "Unlocked"},
        {film: "The Journey"}
      ]
    }
  }

  render(){
    return (

      <div className="opening-list-box">
        This is the opening list box
      </div>

    )
  }

}

export default OpeningBox;