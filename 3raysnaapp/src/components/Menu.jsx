import React, { useContext } from 'react'
import MealsComponent from './MealsComponent'
import FooterMenu from './FooterMenu'
import userContext from '../userContext'
import DrinksComponent from './DrinksComponent'



export default function Menu() {
    const{mealsMenu,drinkMenu} = useContext(userContext)
    
    const mealsShow = ()=>
    {
        return mealsMenu.map((val,idx)=>
        {
            return <MealsComponent idx={idx} val={val}/>
        })
    }
    const drinksShow = ()=>
    {
        return drinkMenu.map((val,idx)=>
        {
            return <DrinksComponent idx={idx} val={val}/>
        })
    }
  return (
    <div className='Menu'>
        <header>
            <h1>عرايسنا ولا ازكى</h1>
        </header>
        <h1 className='SpecialMenuMenuComponent'>
            Special Menu
        </h1>
                <div className='MealShowMenu'>
                    {mealsShow()}
                </div>
        <h1 className='SpecialMenuMenuComponent'>
            Mini Drinks
        </h1>
                <div className='MealShowMenu'>
                    {drinksShow()}
                </div>
                <FooterMenu/>
    </div>
  )
}
