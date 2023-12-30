import {createContext, useState} from 'react'
import خبز from './images/menu/5obz.jpg'
import مكس from './images/menu/mix.jpg'
import مقطع from './images/menu/mkt3.jpg'
import رول from './images/menu/roll.jpg'
import water from './images/menu/water.jpg'
import zero from './images/menu/zero.png'
import cola from './images/menu/cola.jpeg'
import fanta from './images/menu/fanta.jpeg'

const userContext = createContext();

export const UsersProvider = ({children})=>
{
    const [mealIndex,setMealIndex] = useState(null)
    const [drinkIndex,setDrinkIndex] = useState(null)
    const [cart,setCart] = useState([])
    const cartArr = []


    const mealsMenu = [
        {meal : 'رول عرايس' , price: 15 , img:رول},
        {meal : '2رول عرايس' , price: 25    , img:رول},
        {meal : 'خبزة عرايس' , price: 15    , img:خبز},
        {meal : 'مكس عرايس' , price: 35     , img:مكس},
        {meal : 'بوكس خبز مقطع' , price: 20 , img:مقطع},
    ]
    const drinkMenu = [
        {meal : "فانتا" , price: 3     , img:fanta},
        {meal : "ماء" , price: 3       , img:water},
        {meal : "كولا زيرو" , price: 3 , img:zero },
        {meal : "كوكا كولا" , price: 3 , img:cola },
    ]
    const additionsMenu = [
        {add : '🥒خيار مخلل '    ,YesNo: false},
        {add : '🧅بصل مع بقدونس' ,YesNo: false},
        {add : '🍅بندورة'        ,YesNo: false},
        {add : '🍈ملفوف'         ,YesNo: false},
        {add : '🌶️فليفلة'        ,YesNo: false}
    ]

  const [location, setLocation] = useState(null);
  const [openClose ,setOpenClose] = useState(false);
  const[open,setOpen] = useState('none')
  const[close,setClose] = useState('flex')
  const[takeAwayOrShipping,setTakeAwayOrShipping] = useState('Take Away')
  const[distance,setDistance] = useState(null)






    return (
    <userContext.Provider value={{additionsMenu,cartArr,cart,setCart,drinkIndex,setDrinkIndex,mealIndex,setMealIndex,mealsMenu,drinkMenu,distance,
    setDistance,takeAwayOrShipping,setTakeAwayOrShipping,
    close,setClose,open,setOpen,openClose ,
    setOpenClose,location, setLocation}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext