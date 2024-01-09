import React, { useContext } from 'react'
import Meal from './Meal'
import { useNavigate } from 'react-router-dom'
import userContext from '../userContext'

export default function MealsComponent(props) {
  const{setMealIndex} = useContext(userContext)

  const nav = useNavigate()
  const chooseMeal = ()=>
  {
    setMealIndex(props.idx);
    nav('/Meal')
  }
  return (
    <div 
    onClick={chooseMeal}  className='MealsComponent'>
        <img className='MealImageMealsComponent'  src={props.val.img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{props.val.meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>{props.val.price} ₪</h2>
    </div>
  )
}
