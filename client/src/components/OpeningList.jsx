import React from 'react';
import Film from './Film.jsx'

class OpeningList extends React.Component {

// Props are being passed explicitly.

  render(){

      const filmNodes = this.props.films.map( (film) => {
        
        return (
          <Film title={film.film} key={ film.id } >
            { film.film }
          </Film>
        )
      })

      return (
      <div className="filmList">
        { filmNodes }
      </div>
  )}
}

export default OpeningList;


// <img src="https://www.materialui.co/materialIcons/action/bookmark_grey_192x192.png" />