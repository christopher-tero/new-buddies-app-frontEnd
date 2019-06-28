import React from 'react';
import Card from './Card'

export default function CardContainer(props) {

//  console.log(props.data)
  const listItems = props.data.map((pet) => {
    return <Card key={pet.id} name={pet.name} size={pet.size} location={pet.location} breed={pet.breed} age={pet.age} picture={pet.picture} />
  })

  return(
    <div className="container">
      {listItems}
    </div>
  )
}
