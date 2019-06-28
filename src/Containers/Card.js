import React from 'react';

export default function CardContainer(props) {

  return(
    <div className="cards" style={{ backgroundImage: `url(${props.picture})` }}>
      <div className="pet-info">
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.breed}</p>
      </div>
    </div>
  )
}


// <img src={props.picture} height="200px" width="150px" />
//backgroundImage: `url(${props.picture})`
