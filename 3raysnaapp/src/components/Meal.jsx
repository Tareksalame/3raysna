import React, { useState } from 'react'
import userContext from '../userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Additions from './Additions'

export default function Meal() {
  const{calculateDistance,mealIndex,mealsMenu,cart,setCart,additionsMenu} = useContext(userContext)
  const[counter,setCounter] = useState(0)
  const nav = useNavigate()

  //add to cart handler
  const addToCartHandler=()=>{
    if(counter <= 0)
    {
        alert('يجب ان تكون الكمية اكبر من 0')
    }
    else
    {
        setCart([...cart,
            {
             name: mealsMenu[mealIndex].meal,
             price : mealsMenu[mealIndex].price,
             additions: additionsMenu,
             count:counter
            }
            ])
        }
        setCounter(0)
    }
  
  
    //additionsMenu map Function
    const additionsList = () => 
    {
      return additionsMenu.map((val)=>
      {
          return <Additions addToCartHandler={addToCartHandler} val={val}/>
      })
    }
    

  return (
    <div>
        <header style={{paddingTop:'20px',paddingBottom:'20px',marginBottom:'25px'}}>
            <h1 style={{margin:'0px'}}>عرايسنا ولا ازكى</h1>
        </header>
        <img className='MealImageMealsComponent'  src={mealsMenu[mealIndex].img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{mealsMenu[mealIndex].meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white'}}>{mealsMenu[mealIndex].price} ₪</h2>
        <div className='MealDrinkCountersDiv'>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>
            <h1>{counter}</h1>
        </div>
        <div className='AdditionsDiv'>
            {additionsList()}
        </div>
        <div className='AddToCartAndBackButtonDiv'>
            <button onClick={addToCartHandler}>اضف الى السلة</button>
            <button onClick={() => {nav('/Menu')}}>رجعني على القائمة</button>
            <button onClick={()=>{nav('/Informations')}}>خذني عالسلّة</button>
        </div>
        

    </div>
  )
}
