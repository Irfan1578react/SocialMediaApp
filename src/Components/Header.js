import React from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from "react-icons/fa"

const Header = ({title,width}) => {
  return (
    <header>
    <h1>{title}</h1>
    {width<778 ?<FaMobileAlt/>:
    width<992 ?<FaTabletAlt/>:<FaLaptop/>}  
    </header>
  )
}

export default Header
