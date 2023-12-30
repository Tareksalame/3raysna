import React, { useContext } from 'react'
import userContext from '../userContext'
import LocationGetter from './GetLocation'
import { useNavigate } from 'react-router-dom'

export default function TakeAwayOrIn() {
    const{setTakeAwayOrShipping} = useContext(userContext)
    const nav = useNavigate()

    const TakeAway = ()=>
    {
        setTakeAwayOrShipping('Take Away');
        nav('/Menu')
    }
  return (
    <div className='TakeAwayOrInComponent'>
        <header>
            <h1>عرايسنا ولا ازكى</h1>
        </header>
        <div>
        <h2>اختار الّي بناسبك عشان نبلّش الطلبية</h2>
        <LocationGetter/>
        <button onClick={TakeAway}>جاي اوخذها بسيارتي</button>
        </div>
    </div>
  )
}
