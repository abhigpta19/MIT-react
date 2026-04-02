import React from 'react'
import "./restraunt.css"

export const Card1 = () => {
    return <h1>card1</h1>
};

export const Card2 = () => {
    return <h1>card2</h1>
}

const RestrauntCard = ({img_url, rest_name, rating, cusines}) => {
  return (
    <div className='card-container'>
      <img className='card-image' src={img_url} alt="Restraunt" />
      <h2>{rest_name}</h2>
      <h4>Rating: {rating}/5</h4>
      <h4>{cusines}</h4>
    </div>
  )
}

export default RestrauntCard
