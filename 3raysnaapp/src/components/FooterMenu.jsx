import React from 'react'
import homeIcon from '../images/homeicon.png'
import wazeIcon from '../images/wazeicon.png'
import menuIcon from '../images/menuicon.png'
import cartIcon from '../images/carticon.png'
import { useNavigate } from 'react-router-dom'


export default function FooterMenu() {
    const nav = useNavigate()
  return (
    <div className='FooterComponent'>
        <button style={{borderLeft:'0px'}} onClick={()=>{nav('/')}}><img src={homeIcon} alt="Home" /></button>
        <button onClick={()=>{nav('/Choose')}}><img src={menuIcon} alt="Menu" /></button>
        <button href=""><img src={wazeIcon} alt="Waze" /></button>
        <button onClick={()=>{nav('/Informations')}}><img src={cartIcon} alt="Cart" /></button>
    </div>
  )
}
