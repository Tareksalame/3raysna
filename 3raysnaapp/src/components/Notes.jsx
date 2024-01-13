import React, { useContext, useState } from 'react'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'
import userContext from '../userContext'
import Rating from './Rating'
import tiktokblack from '../images/tiktokblack.png'
import instagramblack from '../images/instablack.png'
import whatsAppblack from '../images/whatsappblack.png'
import telephoneblack from '../images/telephoneblack.png'
import { useNavigate } from 'react-router-dom'

export default function Notes() {
    const{OrderNumber,setOrderNumber} = useContext(userContext)
    const {selectedRating, setSelectedRating} = useContext(userContext);
    const[Notes,setNotes] = useState('')
    const nav = useNavigate()


    const SendRating = ()=>
    {
        fetch('/SendRating', 
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method:'post',
                body:JSON.stringify({
                    selectedRating:selectedRating,
                    Notes:Notes
                })
            }).then((res)=>{return res.json()})
            .then((data)=>
            {
                if(data ==='Done')
                {
                    alert('شكرًا لتقييمك ولملاحظاتك')
                    setNotes('')
                    setSelectedRating(0)
                }
                else
                {
                    alert('للاسف لم التقييم والملاحظات لم تصل بنجاح الرجاء المحاولة مرة اخرى')

                }
            }).catch((err)=>{return err})
    }

    const NewOrder = ()=>
    {
        setOrderNumber(0)
        nav('/')
    }
  return (
    <div className='NotesComponent'>
        <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
        <h1>شكرًا لك</h1>
        <h2>بحال انك ما اخذت سكرين شوت</h2>
        <h2> طلبيّتك وصلتنا <br /> رقم طلبيتك <span className='OrderNumberSpan'>{OrderNumber}</span> <br /> خذ سكرين شوت <br /> الدفع نقدي عند الاستلام</h2>
        <Rating/>
        <h3>
            سنكون سعداء ايضًا اذا اضفت لنا بعض الملاحظات
            لنحسن من خدماتنا
        </h3>
        <textarea value={Notes} onChange={(e)=>{setNotes(e.target.value)}} name="textarea" id="textarea" cols="30" rows="6"></textarea>

        <button onClick={SendRating}>إِرسال التقييم</button>
        <a  className='WarGame' target='_blank' rel="noreferrer" href="https://tareksalame.github.io/War/">♠️♦️♣️❤️ <br /> إِلعب حرب ضرب</a>
        <button onClick={NewOrder}>طلبية جديدة</button>


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
