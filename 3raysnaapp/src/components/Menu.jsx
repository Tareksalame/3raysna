import React, { useContext } from 'react'
import MealsComponent from './MealsComponent'
import FooterMenu from './FooterMenu'
import userContext from '../userContext'
import DrinksComponent from './DrinksComponent'
import LocationGetter from './GetLocation'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'



export default function Menu() {
    const{mealsMenu,drinkMenu,takeAwayOrShipping,setTakeAwayOrShipping} = useContext(userContext)
    
    const TakeAway = ()=>
    {
        setTakeAwayOrShipping('Take Away');
    }
    const ShowShippingOrTakeAway = ()=>
    {
        if(takeAwayOrShipping === 'shipping')
        {
            return <div>
                <h2 className='MenuShippingOrTakeAwayH2'>توصيل للبيت</h2>
                <button onClick={TakeAway}>بدي اجي اوخذها</button>
            </div>
        }
        else
        {
            return <div>
                <h2 className='MenuShippingOrTakeAwayH2'>تيك اواي</h2>
                <LocationGetter/>
            </div>
        }
    }
    const mealsShow = ()=>
    {
        return mealsMenu.map((val,idx)=>
        {
            return <MealsComponent key={idx+1} idx={idx} val={val}/>
        })
    }
    const drinksShow = ()=>
    {
        return drinkMenu.map((val,idx)=>
        {
            return <DrinksComponent key={idx+1} idx={idx} val={val}/>
        })
    }
  return (
    <div 
    className='Menu'>
         <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
        {ShowShippingOrTakeAway()}
        <h1 className='SpecialMenuMenuComponent'>
            Special Menu
        </h1>
                <div className='MealShowMenu'>
                    {mealsShow()}
                </div>
        <h1 className='SpecialMenuMenuComponent'>
            Drinks
        </h1>
                <div className='MealShowMenu'>
                    {drinksShow()}
                </div>
                <FooterMenu/>
    </div>
  )
}
