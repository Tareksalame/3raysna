import React, { useContext,} from 'react'
import userContext from '../userContext'
import FooterMenu from './FooterMenu'
import OpenClose from './OpenClose'
import arrow1 from '../images/arrow1.png'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'
import instagramblack from '../images/instablack.png'
import whatsAppblack from '../images/whatsappblack.png'
import telephoneblack from '../images/telephoneblack.png'

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
        <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
            <OpenClose/>
            <input type="file" capture="user" />
            <input type="file" capture="environment" />

        <div className='ParagraphEnterPageComponent'>
        <p>
                      بَسطة عَرايس🌮 <br />
                    لجٰميع مُناسباتكم <br />
        حَفلات خاصة، بوفيهات، عَقائق، جبلات حِناء <br />
        متواجدين اخر الاسبوع خميس/جمعة من الساعة 18:30 - 23:00                    
        </p>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',paddingBottom:'20%'}}>
            <a target='_blank' rel="noreferrer" href="https://wa.me/972546664827"><img width={'50%'} src={whatsAppblack} alt="whatsapp" /></a>
            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/3rayesna.wla.azka/"><img width={'50%'} src={instagramblack} alt="instagram" /></a>
            <a target='_blank' rel="noreferrer" href="tel:0546664827"><img width={'50%'} src={telephoneblack} alt="telephone"/></a>
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
