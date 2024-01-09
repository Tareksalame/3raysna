import React, { useState } from 'react'
import userContext from '../userContext'
import { useContext } from 'react'
import x from '../images/menu/x.png'
import trash from '../images/menu/trash.png'



export default function CartShowComponent(props) {
    const [counter,setCounter] = useState(props.val.count)
    const [display,setDisplay] = useState('flex')
    const{OrderNumber,setOrderNumber,
        setLocation,setTakeAwayOrShipping,distance,takeAwayOrShipping,location,cart,setCart,
        name,setName,PhoneNumber,setPhoneNumber,
        City,setCity,Email,setEmail,Notes,setNotes,
        FinalPrice,SetFinalPrice} = useContext(userContext)






    const FinalPriceCalculate = ()=>
    {
        if(takeAwayOrShipping === 'shipping')
        {
            let Total = cart.map((val)=>
            {
                return val.price*val.count
            })
            Total.push(15)
            SetFinalPrice(Total.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0))
            return <h1 className='FinalPriceForOrderAndDelivery'>
                    سعر الطلبيّة + التوصيل <br />  {FinalPrice}₪ 
                </h1>
        }
        else
        {
            let Total = cart.map((val)=>
            {
                return val.price*val.count
            })
            SetFinalPrice(Total.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0))
            return <h1 className='FinalPriceForOrderAndDelivery'>
                    سعر الطلبيّة <br />  {FinalPrice}₪ 
                </h1>
        }
    }





    const AdditionsArr = ()=>
    {
        return props.val.additions.map((addition)=>
        {
            return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}> <img style={{marginLeft:'10%'}} width={'5%'} src={addition.YesNo} alt="YesNo" /> <h6>----------</h6><h6 style={{marginRight:'10%'}}>{addition.add}</h6></div>
        })
    }

    const plus = ()=>
    {
        props.val.count = props.val.count + 1
        setCounter(props.val.count);
        FinalPriceCalculate()
    }
    const minus = ()=>
    {
        if(props.val.count > 0 && counter > 0)
        {
            props.val.count = props.val.count - 1
            FinalPriceCalculate()
            setCounter(props.val.count);
        }
        else if(props.val.count === 0 && counter === 0)
        {
            setDisplay('none')
        }


    }


    const mealToTrash = ()=>
    {
        props.val.count = 0
        setDisplay('none')
        setCounter(0)
        FinalPriceCalculate()
    }
  return (
    <div className='CartShowComponent' style={{display:display,flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>الوجبة</h5>
        <div style={{justifyContent:'center'}} className='MealDrinkCountersDiv'>
        {/* <button style={{width:'50px',height:'50px',background:'rgb(255, 63, 91)'}} onClick={mealToTrash}> */}
        <img onClick={mealToTrash}  style={{marginRight:'0px'}} width={'30%'} src={trash} alt="" />
        {/* </button> */}
        <h2>{props.val.name}</h2>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>سعر الوحدة</h5>
        <h2>{props.val.price}</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>الكمية</h5>
        <div className='MealDrinkCountersDiv'>
            <button style={{width:'40px' , height:'40px'}} onClick={plus}>+</button>
            <button style={{width:'40px' , height:'40px'}} onClick={minus}>-</button>
        <h2 style={{marginLeft:'20px'}}>{counter}</h2>
        </div>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
            {AdditionsArr()}
        </div>
    </div>
  )
}
