import React from 'react'
import Links from './links/Links'
import style from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
    <div className={style.container}>
    <Link href="/"><div className={style.logo}>Logo</div></Link>
      <div >
        <Links/>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
