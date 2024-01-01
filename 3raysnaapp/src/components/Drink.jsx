import React from 'react'
import userContext from '../userContext'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Drink() {
  const{drinkIndex,drinkMenu,cart,setCart} = useContext(userContext)
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
             name: drinkMenu[drinkIndex].meal,
             price : drinkMenu[drinkIndex].price ,
             additions: [],
             count:counter
            }
            ])
            alert('تمت الاضافة الى السلة')
            setCounter(0)
    }
    }

  return (
    <div>
        <header style={{paddingTop:'20px',paddingBottom:'20px',marginBottom:'25px'}}>
            <h1 style={{margin:'0px'}}>عرايسنا ولا ازكى</h1>
        </header>
        <img className='MealImageMealsComponent'  src={drinkMenu[drinkIndex].img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{drinkMenu[drinkIndex].meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white'}}>{drinkMenu[drinkIndex].price} ₪</h2>
        <div className='MealDrinkCountersDiv'>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>
            <h1>{counter}</h1>
        </div>
        <div className='AddToCartAndBackButtonDiv'>
            <button onClick={addToCartHandler}>اضف الى السلة</button>
            <button onClick={() => {nav('/Menu')}}>رجعني على القائمة</button>
            <button onClick={()=>{nav('/Informations')}}>خذني عالسلّة</button>
        </div>
    </div>
  )
}
