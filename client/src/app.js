import React from 'react';
import ReactDOM from 'react-dom';
import OpeningBox from './components/OpeningBox.jsx';

window.onload = function(){
  ReactDOM.render(
    <OpeningBox />,
    document.getElementById('app')
  );
}
