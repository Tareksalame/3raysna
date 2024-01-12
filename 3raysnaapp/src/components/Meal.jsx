import React, { useState } from 'react'
import userContext from '../userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Additions from './Additions'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'

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
            alert('تمت الاضافة الى السلة')
            setCounter(0)
        }
    }
  
  
    //additionsMenu map Function
    const additionsList = () => 
    {
      return additionsMenu.map((val,idx)=>
      {
          return <Additions key={idx+1} addToCartHandler={addToCartHandler} val={val}/>
      })
    }

    const plus = ()=>
    {
        setCounter(counter + 1)
    }
    const minus = ()=>
    {
        if(counter > 0)
        {
            setCounter(counter - 1)
        }
    }
    

  return (
    <div>
<header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
        <img className='MealImageMealsComponent'  src={mealsMenu[mealIndex].img} alt="MealImage" />
        <h2 style={{backgroundColor:'#7d3b00',color:'white'}}>{mealsMenu[mealIndex].meal}</h2>
        <h2 style={{backgroundColor:'#00677c',color:'white'}}>{mealsMenu[mealIndex].price} ₪</h2>
        <div className='MealDrinkCountersDiv'>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
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
