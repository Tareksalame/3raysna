import React from 'react'
import MealsComponent from './MealsComponent'
import خبز from '../images/menu/5obz.jpg'
import مكس from '../images/menu/mix.jpg'
import مقطع from '../images/menu/mkt3.jpg'
import رول from '../images/menu/roll.jpg'
import water from '../images/menu/water.jpg'
import zero from '../images/menu/zero.png'
import cola from '../images/menu/cola.jpeg'
import fanta from '../images/menu/fanta.jpeg'
import FooterMenu from './FooterMenu'



export default function Menu() {
    const mealsMenu = [
        {meal : 'رول عرايس' , price: 15 , img:رول},
        {meal : '2رول عرايس' , price: 25    , img:رول},
        {meal : 'خبزة عرايس' , price: 15    , img:خبز},
        {meal : 'مكس عرايس' , price: 35     , img:مكس},
        {meal : 'بوكس خبز مقطع' , price: 20 , img:مقطع},
    ]
    const drinkMenu = [
        {meal : "فانتا" , price: 3     , img:fanta},
        {meal : "ماء" , price: 3       , img:water},
        {meal : "كولا زيرو" , price: 3 , img:zero },
        {meal : "كوكا كولا" , price: 3 , img:cola },
    ]
    const mealsShow = ()=>
    {
        return mealsMenu.map((val,idx)=>
        {
            return <MealsComponent val={val}/>
        })
    }
    const drinksShow = ()=>
    {
        return drinkMenu.map((val,idx)=>
        {
            return <MealsComponent val={val}/>
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
