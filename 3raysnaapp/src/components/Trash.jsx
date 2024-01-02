import React, { useContext } from 'react'
import userContext from '../userContext'
import { useNavigate } from 'react-router-dom'

export default function Trash(props) {
    const{setCart,SetFinalPrice} = useContext(userContext)
    const nav = useNavigate()
    const clearCart = ()=>
    {
        setCart([])
        SetFinalPrice(0)
        nav('/EnterPage')
    }
  return (
    <div style={{width:'90%',display:'flex',flexDirection:'column',alignSelf:'center',marginRight:'5%',justifyContent:'center',alignItems:'center'}} className='TrashComponent'>
        <h1>هل انت متاكد من انك تريد ازالة كل ما في السلة ؟</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <button onClick={()=>{props.setTrash('none')}} style={{background:'rgb(220, 20, 60)'}}>لا</button>
        <button onClick={clearCart} style={{background:'rgb(34, 139, 34)'}}>نعم</button>
        </div>
    </div>
  )
}
