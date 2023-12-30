import React from 'react'
import { useState } from 'react'
import check from '../images/menu/checked.png'
import x from '../images/menu/x.png'


export default function Additions(props) {
  const[counter,setCounter] = useState(x)

  const Yes = ()=>
  {
    props.val.YesNo = true
    setCounter(check)
  }
  const No = ()=>
  {
    props.val.YesNo = false
    setCounter(x)
  }

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
