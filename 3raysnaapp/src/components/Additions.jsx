import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import check from '../images/menu/checked.png'
import x from '../images/menu/No.png'
import userContext from '../userContext'


export default function Additions(props) {
  const[counter,setCounter] = useState(check)
  const {cart} = useContext(userContext)

  const Yes = ()=>
  {
    props.val.YesNo = check
    setCounter(check)
  }
  const No = ()=>
  {
    props.val.YesNo = x
    setCounter(x)
  }

  useEffect(()=>
  {
    setCounter(check)
  },[cart])

  return (
    <div className='AdditionsComponent'>
        <div className='additionName'>
        <h1>{props.val.add}</h1>
        </div>
        <div className='AdditionCountersDiv'>
            <button onClick={Yes}>+</button>
            <button onClick={No}>-</button>
            <img  src={counter} alt="YESNO" />
        </div>
    </div>
  )
}
