import React, { useContext, useEffect, useState } from 'react'
import userContext from '../userContext'
import FooterMenu from './FooterMenu'
import OpenClose from './OpenClose'

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
        <h1>عرايسنا ولا ازكى</h1>
        
            <OpenClose/>
        <div className='ParagraphEnterPageComponent'>
            <p>بَسطة عَرايس🌮<br />
               لجٰميع مُناسباتكم<br />
                حَفلات خاصة، بوفيهات، عَقائق، جبلات حِناء<br />
متواجدين اخر الاسبوع خميس/جمعة من الساعة 18:30</p>
        </div>

        <div>
            {OpenCloseFunc()}
        </div>
        
    </div>
  )
}
