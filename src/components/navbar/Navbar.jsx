import React from 'react'
import Links from './links/Links'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
      <div>Logo..</div>
      <div >
        <Links/>
        </div>
      
    </div>
  )
}

export default Navbar
