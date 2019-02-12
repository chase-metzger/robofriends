import React from 'react'
import Card from './Card'

export default function CardList ({ robots }) {
  const cardsArray = robots.map((user, index) => {
    return <Card key={index} id={user.id} name={user.name} email={user.email} />
  })

  return (
    <React.Fragment>
      {cardsArray}
    </React.Fragment>
  )
}
