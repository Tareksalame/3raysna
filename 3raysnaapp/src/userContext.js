import {createContext, useEffect, useState} from 'react'

const userContext = createContext();

export const UsersProvider = ({children})=>
{
  const [location, setLocation] = useState(null);
  const [openClose ,setOpenClose] = useState(false);
  const[open,setOpen] = useState('red')
  const[close,setClose] = useState('green')




    return (
    <userContext.Provider value={{close,setClose,open,setOpen,openClose ,setOpenClose,location, setLocation}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext