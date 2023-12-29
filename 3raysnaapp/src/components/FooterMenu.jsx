import React from 'react'
import homeIcon from '../images/homeicon.png'
import wazeIcon from '../images/wazeicon.png'
import menuIcon from '../images/menuicon.png'
import cartIcon from '../images/carticon.png'


export default function FooterMenu() {
  return (
    <div className='FooterComponent'>
        <img src={homeIcon} alt="Home" />
        <img src={menuIcon} alt="Menu" />
        <img src={wazeIcon} alt="Waze" />
        <img src={cartIcon} alt="Cart" />

    </div>
  )
}
