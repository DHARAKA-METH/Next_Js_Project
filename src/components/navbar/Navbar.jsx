import React from 'react'
import Links from './links/Links'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
    <div className={style.container}>
      <div className={style.logo}>Logo</div>
      <div >
        <Links/>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
