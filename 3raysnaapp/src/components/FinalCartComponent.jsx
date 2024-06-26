import React, { useContext, useState } from 'react'
import userContext from '../userContext'
import CartShowComponent from './CartShowComponent'
import LocationGetter from './GetLocation'
import { useNavigate } from 'react-router-dom'
import x from '../images/menu/trash.png'
import Trash from './Trash'
import Logo3raysna from '../images/Open/Logo3raysna.PNG'


export default function FinalCartComponent() {
    const{OrderNumber,setOrderNumber,
        setLocation,setTakeAwayOrShipping,distance,takeAwayOrShipping,location,cart,setCart,
        name,setName,PhoneNumber,setPhoneNumber,
        City,setCity,Email,setEmail,Notes,setNotes,
        FinalPrice,SetFinalPrice} = useContext(userContext)
        const nav = useNavigate()
        const [trash,setTrash] = useState('none')


        const ShippingPriceInput =()=>
        {
            if(City === 'جت')
                {
                    return <input disabled value='25 ₪' type="text" />
                }
                else if (City === 'باقة')
                {
                    return <input disabled value='15 ₪' type="text" />

                }
                else if (City === 'زيمر')
                {
                    return <input disabled value='35 ₪' type="text" />

                }
                else if (City === 'ميسر')
                {
                    return <input disabled value='30 ₪' type="text" />

                }
        }
        const TakeAwayOrShippingFunction = ()=>
        {
            if(takeAwayOrShipping === 'shipping')
            {
                return <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
                    <div>
                        <h3>
                            توصيل/تيك اواي
                        </h3>
                        <input disabled value='توصيل' type="text" />
                    </div>
                    <div>
                        <h3>تكلفة التوصيل</h3>
                        {ShippingPriceInput()}
                        {/* <input disabled value='15 ₪' type="text" /> */}
                    </div>
                </div>
            }
            else
            {
                return <div>
                    <h3>
                        توصيل/تيك اواي
                    </h3>
                    <input disabled value='تيك اواي' type="text" />
                </div>
            }
        }



        // Take Away Or Shipping Change Functions
        const handleGetLocation = () => {
            alert('الرجاء الموافقة على استخدام موقعك لاغراض التوصيل')
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  setLocation({latitude, longitude });
                  setTakeAwayOrShipping('shipping')
                },
                (error) => {
                  console.error('Error getting location:', error.message);
                },
                { enableHighAccuracy: true }
              );
            } else {
              alert('Geolocation is not supported by your browser');
            }
          };


        const TakeAway = ()=>
        {
            setTakeAwayOrShipping('Take Away');
        }
        const ShowShippingOrTakeAway = ()=>
        {
            if(takeAwayOrShipping === 'shipping')
            {
                return <div className='TakeAwayOrShippingCartDiv' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop:'10%',
                    marginBottom:'10%'
                }}>
                    {/* <button onClick={TakeAway}>بدي اجي اوخذها</button> */}
                </div>
            }
            else
            {
                return <div className='TakeAwayOrShippingCartDiv' 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop:'10%',
                    marginBottom:'10%'
                }}>
                    {/* <button onClick={handleGetLocation}>بدي توصيل للبيت</button> */}

                </div>
            }
        }


        // const CartShow = ()=>
        // {
        //     return cart.map((val)=>
        //     {
        //         return <CartShowComponent val={val}/>
        //     })
        // }

        const CartShow = () => {
            // Use filter to exclude items with count equal to 0
            const filteredCart = cart.filter((val) => val.count !== 0);
          
            // Map over the filtered array
            return filteredCart.map((val,idx) => <CartShowComponent key={idx+1} val={val} />);
          };


        const FinalPriceCalculate = ()=>
        {
            if(takeAwayOrShipping === 'shipping')
            {
                let Total = cart.map((val)=>
                {
                    return val.price*val.count
                })
                if(City === 'جت')
                {
                    Total.push(25)
                }
                else if (City === 'باقة')
                {
                    Total.push(15)
                }
                else if (City === 'زيمر')
                {
                    Total.push(35)
                }
                else if (City === 'ميسر')
                {
                    Total.push(30)
                }
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

        const BuyNowFunction = ()=>
        {
            if(FinalPrice === null)
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else if(FinalPrice-15 < 15 && City === 'باقة' && takeAwayOrShipping === 'shipping')
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else if(FinalPrice-25 < 15 && City === 'جت' && takeAwayOrShipping === 'shipping')
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else if(FinalPrice-35 < 15 && City === 'زيمر' && takeAwayOrShipping === 'shipping')
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else if(FinalPrice-30 < 15 && City === 'ميسر' && takeAwayOrShipping === 'shipping')
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else if(FinalPrice < 15 && takeAwayOrShipping === 'Take Away')
            {
                alert('الحد الادنى للطلبية هو ₪15')
            }
            else{
            fetch('/BuyNow', 
            {
                headers:{
                    "Content-Type": "application/json"
                },
                method:'post',
                body:JSON.stringify({
                    name:name,
                    phoneNumber: PhoneNumber,
                    city: City,
                    email:Email,
                    notes:Notes,
                    TakeAwayOrShipping:takeAwayOrShipping,
                    location:location,
                    cart:cart,
                    FinalPrice:FinalPrice,
                    OrderNumber:OrderNumber,
                    OrderStatus:'Pending'
                })
            }).then((res)=>{return res.json()})
            .then((data)=>
            {
              if(data === 'done')
              {
                alert('\nطلبيّتك وصلتنا' + ' \nرقم طلبيتك' + OrderNumber + '\n خذ سكرين شوت' + '\nالدفع نقدي عند الاستلام')
                setName('')
                setPhoneNumber('')
                setCity('')
                setEmail('')
                setNotes('')
                setTakeAwayOrShipping('Take Away')
                setLocation(null)
                setCart([])
                SetFinalPrice(0)
                nav('/Notes')
                // setTimeout(() =>nav("/"), 1500)
              }
              else
              {
                alert('لم تصل الطلبية الرجاء تحديث الصفحة واعادة المحاولة مرة اخرى')
              }
            }).catch((err)=>{return err})
        }
        }

        const trashFunction = ()=>
        {
            if(trash === 'none')
            {
                setTrash('flex')
            }
            else
            {
                setTrash('none')

            }
        }

  return (
    <div className='FinalCartComponent'>
        <header style={{backgroundColor:'transparent', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <img width={'70%'} src={Logo3raysna} alt="Logo" />
        </header>
            <h4>التفاصيل</h4>
        <div>
            <h3>الاسم الكامل</h3>
            <input disabled value={name} type="text" />
        </div>
        <div>
            <h3>رقم الهاتف</h3>
            <input disabled value={PhoneNumber} type="text" />
        </div>
        <div>
            <h3>البلد</h3>
            <input disabled value={City} type="text" />
        </div>
        <div>
            <h3>البريد الالكتروني</h3>
            <input disabled value={Email} type="text" />
        </div>
        <div>
            <h3>ملاحظات</h3>
            <textarea disabled value={Notes} name="textarea" id="textarea" cols="30" rows="2"></textarea>
        </div>
        <h4 style={{marginTop:'10%'}}>السلّة</h4>

        {TakeAwayOrShippingFunction()}
        {/* {ShowShippingOrTakeAway()} */}

        <img onClick={trashFunction} style={{marginTop:'10%',marginBottom:'10%'}} width={'10%'} src={x} alt="" />
        <div style={{display:trash}}>
        <Trash setTrash={setTrash}/>
        </div>
        {CartShow()}
        <div className='FinalCartReadyButtonsDiv' style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection:'column',
            alignItems:'center',
            marginTop:'7%',
        }}>
            {FinalPriceCalculate()}
            <h2>رقم الطلبية - {OrderNumber}</h2>
        <button onClick={BuyNowFunction}>
            جاهز
        </button>
        <button onClick={()=>{nav('/Menu')}}>
            لحظة بدي ازيد كمان اشي
        </button>
        </div>
    </div>
  )
}
