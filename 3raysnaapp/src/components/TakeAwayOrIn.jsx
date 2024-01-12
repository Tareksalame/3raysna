import React, { useContext } from 'react'
import userContext from '../userContext'
import LocationGetter from './GetLocation'
import { useNavigate } from 'react-router-dom'
import k1 from '../images/menu/k1.png'
import k2 from '../images/menu/k2.jpg'
import k3 from '../images/menu/k3.jpg'
import k4 from '../images/menu/k4.jpg'
import k5 from '../images/menu/k5.jpg'
import arrow1 from '../images/arrow1.png'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'



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
        <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
        <div style={{marginTop:'5%'}}>
        <h2 style={{marginBottom:'2%'}}>اختار الّي بناسبك عشان نبلّش الطلبية</h2>


        <LocationGetter/>
        <button onClick={TakeAway}>جاي اوخذها بسيارتي</button>
        <h2>بحال انه كبسة "بدي توصيل للبيت" ما اشتغلت اتبع الخطوات</h2>
        <img width={'30%'} style={{marginBottom:'5%'}} src={k1} alt="" />
        <img style={{width:'20%'}} className='ArrowSecondEnterPageComponent'  src={arrow1} alt="arrow" />

        <img width={'70%'} style={{marginBottom:'5%'}} src={k2} alt="" />
        <img style={{width:'20%'}} className='ArrowSecondEnterPageComponent'  src={arrow1} alt="arrow" />

        <img width={'70%'} style={{marginBottom:'5%'}} src={k3} alt="" />
        <img style={{width:'20%'}} className='ArrowSecondEnterPageComponent'  src={arrow1} alt="arrow" />

        <img width={'70%'} style={{marginBottom:'5%'}} src={k4} alt="" />
        <img style={{width:'20%'}} className='ArrowSecondEnterPageComponent'  src={arrow1} alt="arrow" />

        <img width={'60%'} style={{marginBottom:'5%'}} src={k5} alt="" />
        </div>
    </div>
  )
}
