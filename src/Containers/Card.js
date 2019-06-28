import React from 'react';

export default function Card(props) {

  return(
    <div className="cards" style={{ backgroundImage: `url(${props.picture})` }}>
      <div className="pet-info">
        <p>Name: {props.name}</p>
        <p>Breed: {props.breed}</p>
        <p>Age: {props.age}</p>
        <p>Size: {props.size}</p>
        <p>Location: {props.location}</p>
      </div>
    </div>
  )
}


// <img src={props.picture} height="200px" width="150px" />
//backgroundImage: `url(${props.picture})`
