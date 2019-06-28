import React from 'react';

export default function CardContainer(props) {

  return(
    <div className="cards">
      <p>{props.name}</p>
      <p>{props.breed}</p>
      <p>{props.species}</p>
    </div>
  )
}
