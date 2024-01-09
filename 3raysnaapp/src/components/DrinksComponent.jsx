import React from 'react'
import { useContext } from 'react'
import userContext from '../userContext'
import { useNavigate } from 'react-router-dom'

export default function DrinksComponent(props) {
    const{setDrinkIndex} = useContext(userContext)

  const nav = useNavigate()
  const chooseDrink = ()=>
  {
    setDrinkIndex(props.idx);
    nav('/Drink')
  }
  return (
    <div  onClick={chooseDrink}  className='MealsComponent'>
        <img className='MealImageMealsComponent'  src={props.val.img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{props.val.meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>{props.val.price} ₪</h2>
    </div>
  )
}
