import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import fork from '../images/Open/fork.png'
import pizza from '../images/Open/pizza.png'
import salad from '../images/Open/salad.png'
import tiktokblack from '../images/tiktokblack.png'
import instagramblack from '../images/instablack.png'
import whatsAppblack from '../images/whatsappblack.png'
import telephoneblack from '../images/telephoneblack.png'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'

export default function ThankYouPage() {
    const nav = useNavigate()
    // const OpenFunction = () =>
    // {
    //     setTimeout(() => {
    //         nav('/EnterPage')
    //     }, 6000);
    // }
    useEffect(()=>
    {
        setTimeout(() => {
            nav('/EnterPage')
        }, 6000);
    },[])


    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add('show')
            }else
            {
                entry.target.classList.remove('show')
            }
        })
    });
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=>{observer.observe(el)})
    
  return (
    <div className='AnimationPageDiv'>
        {/* {OpenFunction()} */}
        <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
        <div className='OpenAnimationDiv'>
            <img id='Fork' src={fork} alt="Fork" />
            <img id='Pizza' src={pizza} alt="Pizza" />
            <img id='Salad' src={salad} alt="Salad" />
        </div>
        {/* <h1>شكرًا الاسم، سيصلك الطلب باسرع وقت ممكن</h1>
        <h2>رقم طلبيتك - </h2>
        <h2>رقم هاتفك - </h2>
        <h2>تيك اواي او شيبينج- </h2>
        <h2>كارت- </h2>
        <h2>السعر- </h2> */}
        <div className="hidden" id="miniuDiv">
            {/* <!-- MINIU --> */}
            <h3 id="design">Designed & Developed By - <span>Tarek Ben Jehad</span></h3>
            <div>
              <a target='_blank' rel="noreferrer" href="https://wa.me/972525272910"><img src={whatsAppblack} alt="" /></a>
              <a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@tarekbenjehad?is_from_webapp=1&sender_device=pc"><img src={tiktokblack} alt="" /></a>
              <a target='_blank' rel="noreferrer" href="https://www.instagram.com/tarekbenjehad?igsh=OGQ5ZDc2ODk2ZA%3D%3D"><img src={instagramblack} alt="" /></a>
              <a target='_blank' rel="noreferrer" href="tel:0525272910"><img src={telephoneblack} alt=""/></a>
            </div>
        </div>
    </div>
  )
}
