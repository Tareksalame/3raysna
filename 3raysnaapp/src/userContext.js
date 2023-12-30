import {createContext, useState} from 'react'

const userContext = createContext();

export const UsersProvider = ({children})=>
{
  const [location, setLocation] = useState(null);
  const [openClose ,setOpenClose] = useState(false);
  const[open,setOpen] = useState('none')
  const[close,setClose] = useState('flex')
  const[takeAwayOrShipping,setTakeAwayOrShipping] = useState('Take Away')
  const[distance,setDistance] = useState(null)






    return (
    <userContext.Provider value={{distance,setDistance,takeAwayOrShipping,setTakeAwayOrShipping,close,setClose,open,setOpen,openClose ,setOpenClose,location, setLocation}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext