import React, { useContext } from 'react'
import userContext from '../userContext'

export default function Manager() {
    const{setClose,setOpen,openClose ,setOpenClose} = useContext(userContext)

    const OpenCloseStyle = () => 
    {
        if (openClose === "close")
        {
            setOpenClose('open')
            setOpen('green')
            setClose('red')
        }
        else
        {
            setOpenClose('close')
            setOpen('red')
            setClose('green')
        }
    }
  return (
    <div>
        <button onClick={OpenCloseStyle}>
                OpenClose
        </button>
    </div>
  )
}
