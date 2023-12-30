import React from 'react'
import homeIcon from '../images/homeicon.png'
import wazeIcon from '../images/wazeicon.png'
import menuIcon from '../images/menuicon.png'
import cartIcon from '../images/carticon.png'


export default function FooterMenu() {
  return (
    <div className='FooterComponent'>
        <a style={{borderLeft:'0px'}} href="/"><img src={homeIcon} alt="Home" /></a>
        <a href="/Choose"><img src={menuIcon} alt="Menu" /></a>
        <a href=""><img src={wazeIcon} alt="Waze" /></a>
        <a href="/Cart"><img src={cartIcon} alt="Cart" /></a>

    </div>
  )
}
