import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../userContext'

export default function InformationsPage() {

    const {calculateDistance,distance,takeAwayOrShipping,location,cart,name,setName,PhoneNumber,setPhoneNumber,City,setCity,Email,setEmail,Notes,setNotes,FinalCart,setFinalCart} = useContext(userContext)
    const nav = useNavigate()

    const checkInformations = ()=>
    {
        if(name === '' || PhoneNumber === '' || City === '')
        {
            alert('عليك تعبئة المعلومات الاساسية قبل الاستمرار')
        }
        else if (PhoneNumber.length < 10 || PhoneNumber.length > 10)
        {
            alert('رقم الهاتف يجب ان يكون من 10 ارقام')
        }
        else if (name.length < 3)
        {
            alert('الرجاء كتابة اسمك واسم العائلة')
        }
        else
        {

                calculateDistance()
                nav('/Cart')
                // setFinalCart([...FinalCart,
                //     {
                //         Name: name,
                //         PhoneNumber : PhoneNumber,
                //         City :City,
                //         Email: Email,
                //         Notes:Notes,
                //         Cart:cart,
                //         ShippingOrTakeAway:takeAwayOrShipping,
                //         Location:location,
                //         Distance:distance
                //     }])
        }

    }
  return (
    <div className='InformationsPageComponent'>
        <h1>عبّي تفاصيلك <br /> عشان نكمّل الطلبيّة</h1>
        <h3><span style={{color:'red'}}>*</span>الاسم الكامل</h3>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} className='InformationsPageComponentInput' type="text" />
        <h3><span style={{color:'red'}}>*</span>رقم الهاتف</h3>
        <input value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className='InformationsPageComponentInput' type="number" />
        <h3><span style={{color:'red'}}>*</span>البلد</h3>
        <select value={City} onChange={(e)=>{setCity(e.target.value)}} name="select" id="select">
            <option value="">اختيار</option>
            <option value="جت">جت</option>
            <option value="باقة">باقة</option>
            <option value="زيمر">زيمر</option>
            <option value="ميسر">ميسر</option>
        </select>
        <h3>البريد الالكتروني <span>(يتم استعماله في حال وجود عروض)</span></h3>
        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='InformationsPageComponentInput' type="email" />
        <h3>ملاحظات</h3>
        <textarea value={Notes} onChange={(e)=>{setNotes(e.target.value)}} name="textArea" id="textArea" cols="30" rows="4"></textarea>
        <button onClick={checkInformations}>
            يلّا نكمّل
        </button>
        <button onClick={()=>{nav('/Menu')}}>
            لحظة بدي ازيد كمان اشي
        </button>
    </div>
  )
}
