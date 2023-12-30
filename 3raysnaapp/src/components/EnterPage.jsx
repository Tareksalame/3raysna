import React, { useContext,} from 'react'
import userContext from '../userContext'
import FooterMenu from './FooterMenu'
import OpenClose from './OpenClose'
import arrow1 from '../images/arrow1.png'


export default function EnterPage() {
    const{openClose,open} = useContext(userContext)


    const OpenCloseFunc = ()=>
    {
        if(openClose === true)
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
                     متواجدين اخر الاسبوع خميس/جمعة من الساعة 18:30 - 22:00                    
                    </p>
        </div>
            <div className='StartGetDivEnterPageComponent'>
                <h2 style={{display:open}} id='Start' >ابدا طلبيتك <br /> من هون</h2>
                <h2 style={{display:open}} id='Get'>اوصل لعندنا <br /> من هون</h2>
            </div>
            <div className='ArrowDivEnterPageComponent'>
                <img style={{display:open}} className='ArrowEnterPageComponent'  src={arrow1} alt="arrow" />
                <img style={{display:open}} className='ArrowSecondEnterPageComponent'  src={arrow1} alt="arrow" />
            </div>
        <div>
            {OpenCloseFunc()}
        </div>
    </div>
  )
}
