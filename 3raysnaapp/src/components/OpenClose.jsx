import React, { useState } from 'react'

import userContext from '../userContext';
import { useContext, useEffect } from 'react';

export default function OpenClose() {

    const{openClose,close,open,setClose,setOpen ,setOpenClose} = useContext(userContext)



    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    function isRestaurantOpen(day, time) {
        // Check if the day is Thursday or Friday
        if (day === 'Thursday' || day === 'Friday') {
          // Convert the time to a comparable format (e.g., '18:30' becomes 1830)
          const formattedTime = parseInt(time.replace(':', ''), 10);
      
          // Check if the time is between 18:30 (1830) and 22:00 (2200)
          if (formattedTime >= 1830 && formattedTime <= 2200) {
            setOpenClose(true) // The restaurant is open
            setOpen('green')
            setClose('red')
          }
        }
        else
        {
            // The restaurant is not open at the specified day and time
            setOpenClose(false)
            setOpen('red')
            setClose('green')
        }
      
        
      }


      useEffect(()=>
      {
        isRestaurantOpen(day,time)
      },[])

  return (
    <div className='OpenCloseDivInEnterPageComponent'>
    <h2 style={{backgroundColor:open}}>OPEN</h2>
    <h2 style={{backgroundColor:close}}>CLOSE</h2>
    </div>
  )
}
