import React, { useState } from 'react'

import userContext from '../userContext';
import { useContext, useEffect } from 'react';
import openimg from '../images/open.png'
import closeimg from '../images/close.svg'

export default function OpenClose() {

    const{open,close,setClose,setOpen ,setOpenClose} = useContext(userContext)



    const now = new Date();
    // const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const day = 'Friday'
    const time = '20:00'
    function isRestaurantOpen(day, time) {
        // Check if the day is Thursday or Friday
        if (day === 'Thursday' || day === 'Friday' || day === 'Saturday') {
          // Convert the time to a comparable format (e.g., '18:30' becomes 1830)
          const formattedTime = parseInt(time.replace(':', ''), 10);
      
          // Check if the time is between 18:30 (1830) and 22:00 (2200)
          if (formattedTime >= 1830 && formattedTime <= 2200) {
            setOpenClose(true) // The restaurant is open
            setOpen('flex')
            setClose('none')
          }
        }
        else
        {
            // The restaurant is not open at the specified day and time
            setOpenClose(false)
            setOpen('none')
            setClose('flex')
        }
      
        
      }


      useEffect(()=>
      {
        isRestaurantOpen(day,time)
      },[])

  return (
    <div className='OpenCloseDivInEnterPageComponent'>
        <img style={{display:open,width:'40%',paddingTop:'5%',paddingBottom:'10%'}} src={openimg} alt="open" />
        <img style={{display:close}} src={closeimg} alt="close" />
    </div>
  )
}
