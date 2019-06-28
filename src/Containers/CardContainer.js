import React from 'react';
import Card from './Card'

export default function CardContainer(props) {

//  console.log(props.data)
  const listItems = props.data.map((pet) => {
    return <Card key={Date.now()} name={pet.name} species={pet.species} breed={pet.breed} picture={pet.picture} />
  })

  return(
    <div className="container">
      {listItems}
    </div>
  )
}
