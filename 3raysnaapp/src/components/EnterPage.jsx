import React, { useContext, useEffect, useState } from 'react'
import userContext from '../userContext'
import FooterMenu from './FooterMenu'
import OpenClose from './OpenClose'
import arrow from '../images/arrow.png'

export default function EnterPage() {
    const{openClose,close,open,setClose,setOpen ,setOpenClose} = useContext(userContext)


    const OpenCloseFunc = ()=>
    {
        if(openClose == true)
        {
            return <FooterMenu/>
        }
    }


  return (
    <div className='EnterPageComponent'>
        <header>
            <h1>عرايسنا ولا ازكى</h1>
        </header>
            <OpenClose/>
        <div className='ParagraphEnterPageComponent'>
            <p>بَسطة عَرايس🌮<br />
               لجٰميع مُناسباتكم<br />
                حَفلات خاصة، بوفيهات، عَقائق، جبلات حِناء<br />
متواجدين اخر الاسبوع خميس/جمعة من الساعة 18:30</p>
        </div>
        <div className='StartGetDivEnterPageComponent'>
        <h2 id='Start' >ابدا طلبيتك من هون</h2>
        <h2 id='Get'>اوصل لعندنا من هون</h2>
        </div>
        <div className='ArrowDivEnterPageComponent'>
        <img className='ArrowEnterPageComponent'  src={arrow} alt="arrow" />
        <img className='ArrowSecondEnterPageComponent'  src={arrow} alt="arrow" />
        </div>
  
        <div>
            {OpenCloseFunc()}
        </div>
        
    </div>
  )
}
