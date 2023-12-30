import React from 'react'
export default function MealsComponent(props) {
  return (
    <div className='MealsComponent'>
        <img className='MealImageMealsComponent'  src={props.val.img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{props.val.meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>{props.val.price} ₪</h2>
    </div>
  )
}
