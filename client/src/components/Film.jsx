import React from 'react';

const Film = (props) => {

  const bookmarkImageHTML = {
    url: "https://www.materialui.co/materialIcons/action/bookmark_grey_192x192.png"
  }

  const bookmarkImageStyle = {
    width: '30px',
    height: '30px'
  }

    return(

      <div className="film">
      <p className="filmTitle">
      <img src={bookmarkImageHTML.url} style={bookmarkImageStyle} /> 
          { props.film }
          { props.children }
      </p>
      </div>
    )

}

export default Film;