import React from 'react'
import { useState } from 'react'
import check from '../images/menu/checked.png'
import x from '../images/menu/x.png'


export default function Additions(props) {
  const[counter,setCounter] = useState(x)

  return (
    <div className='AdditionsComponent'>
        <div className='additionName'>
        <h1>{props.val}</h1>
        </div>
        <div className='AdditionCountersDiv'>
            <button onClick={()=>{setCounter(check)}}>+</button>
            <button onClick={()=>{setCounter(x)}}>-</button>
            <img  src={counter} alt="YESNO" />
        </div>
    </div>
  )
}
