import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Card ({ name, email, id }) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <LazyLoadImage src={`https://robohash.org/${id}?size=200x200`} alt='robot profile'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
