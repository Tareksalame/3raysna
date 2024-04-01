import {createContext, useState} from 'react'
import خبز from './images/menu/5obz.jpg'
import مكس from './images/menu/mix.jpg'
import مقطع from './images/menu/mkt3.jpg'
import رول from './images/menu/roll.jpg'
import تشبس from './images/menu/frenchfries.jpg'
import water from './images/Drinks/water.png'
import zero from './images/Drinks/zero.jpeg'
import cola from './images/Drinks/cocacola.jpeg'
import fanta from './images/Drinks/fanta.png'
import sprite from './images/Drinks/sprite.webp'
import xl from './images/Drinks/xl.webp'
import xl10 from './images/Drinks/xl10.png'


import check from './images/menu/checked.png'
import x from './images/menu/No.png'


const userContext = createContext();

export const UsersProvider = ({children})=>
{
    const [mealIndex,setMealIndex] = useState(null)
    const [drinkIndex,setDrinkIndex] = useState(null)
    const [cart,setCart] = useState([])
    const cartArr = []
    const [FinalCart,setFinalCart] = useState([])
    const [FinalPrice,SetFinalPrice]= useState(0)
    const [OrderNumber,setOrderNumber] = useState(0)

    const [name,setName] = useState('')
    const [PhoneNumber,setPhoneNumber] = useState('')
    const [City,setCity] = useState('')
    const [Email,setEmail] = useState('')
    const [Notes,setNotes] = useState('')

    const [selectedRating, setSelectedRating] = useState(0);


    const mealsMenu = [
        {meal : 'رول عرايس سيخين' , price: 25    , img:رول},
        {meal : 'خبزة عرايس' , price: 15    , img:خبز},
        {meal : 'مكس عرايس' , price: 35     , img:مكس},
        {meal : 'بوكس خبز مقطع' , price: 20 , img:مقطع},
    ]
    const fries = [
      {meal : 'تشبس' , price: 10 , img:تشبس},
      {meal : 'بوتيتو' , price: 10 , img:تشبس},
      {meal : 'حلقات البصل' , price: 10 , img:تشبس},
      {meal : 'ميكس' , price: 10 , img:تشبس},
    ]

    const drinkMenu = [
        {meal : "فانتا" , price: 7     , img:fanta},
        {meal : "ماء" , price: 5       , img:water},
        {meal : "كولا زيرو" , price: 7 , img:zero },
        {meal : "كوكا كولا" , price: 7 , img:cola },
        {meal : "سبرايت" , price: 7 , img:sprite },
        {meal : "اكس ال 10" , price: 7 , img:xl10 },
        {meal : "اكس ال" , price: 7 , img:xl },


    ]
    const additionsMenu = [
        {add : '🥒خيار مخلل '    ,YesNo: check},
        {add : '🧅بصل مع بقدونس' ,YesNo: check},
        {add : '🍅بندورة'        ,YesNo: check},
        {add : '🍈ملفوف'         ,YesNo: check},
        {add : '🌶️فليفلة'        ,YesNo: check}
    ]

  const [location, setLocation] = useState(null);
  const [openClose ,setOpenClose] = useState(false);
  const[open,setOpen] = useState('none')
  const[close,setClose] = useState('flex')
  const[takeAwayOrShipping,setTakeAwayOrShipping] = useState('Take Away')
  const[distance,setDistance] = useState(null)




  const [restaurantLocation, setRestaurantLocation] = useState({
    latitude: 32.4108052, // Replace with the actual latitude of the restaurant
    longitude: 35.0371928, // Replace with the actual longitude of the restaurant
  });


const calculateDistance = () => {
    if (location && restaurantLocation) {
      const R = 6371; // Radius of the Earth in kilometers
      const lat1 = location.latitude;
      const lon1 = location.longitude;
      const lat2 = restaurantLocation.latitude;
      const lon2 = restaurantLocation.longitude;

      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      setDistance(R * c); // Distance in kilometers

    }
  };

  const toRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };




    return (
    <userContext.Provider value={{selectedRating, setSelectedRating,OrderNumber,setOrderNumber,
        FinalPrice,SetFinalPrice,calculateDistance,FinalCart,setFinalCart,
    name,setName,PhoneNumber,setPhoneNumber,City,setCity,Email,setEmail,Notes,setNotes,
    additionsMenu,cartArr,cart,setCart,drinkIndex,setDrinkIndex,mealIndex,setMealIndex,mealsMenu,drinkMenu,distance,
    setDistance,takeAwayOrShipping,setTakeAwayOrShipping,
    close,setClose,open,setOpen,openClose ,
    setOpenClose,location, setLocation}}>
        {children}
    </userContext.Provider>
    )
}

export default userContext