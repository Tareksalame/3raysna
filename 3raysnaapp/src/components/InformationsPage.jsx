import React, { useState } from 'react'
import LocationGetter from './GetLocation'
import FooterMenu from './FooterMenu'
import { useNavigate } from 'react-router-dom'

export default function InformationsPage() {
    const [name,setName] = useState('')
    const [PhoneNumber,setPhoneNumber] = useState('')
    const [City,setCity] = useState('')
    const [Email,setEmail] = useState('')

    const nav = useNavigate()
  return (
    <div className='InformationsPageComponent'>
        <h1>عبّي تفاصيلك <br /> عشان نكمّل الطلبيّة</h1>
        <h3>الاسم الكامل</h3>
        <input className='InformationsPageComponentInput' type="text" />
        <h3>رقم الهاتف</h3>
        <input className='InformationsPageComponentInput' type="text" />
        <h3>البلد</h3>
        <select name="" id="">
            <option value=""></option>
            <option value="">جت</option>
            <option value="">باقة</option>
            <option value="">زيمر</option>
            <option value="">ميسر</option>
        </select>
        <h3>الايميل <span>(يتم استعماله في حال وجود عروض)</span></h3>
        <input className='InformationsPageComponentInput' type="email" />
        <h3>ملاحظات</h3>
        <textarea name="textArea" id="textArea" cols="30" rows="4"></textarea>
        <button>
            يلّا نكمّل
        </button>
        <button onClick={()=>{nav('/Menu')}}>
            لحظة بدي ازيد كمان اشي
        </button>
    </div>
  )
}
