"use client"
import Link from 'next/link'
import React from 'react'
import style from './NavLink.module.css'
import { usePathname } from 'next/navigation'

const NavLinks = ({title,path}) => {
  const pathName=usePathname()
  return (
      <Link className={`${style.container} ${pathName===path&&style.active}`} href={path}>{title}</Link>

  )
}

export default NavLinks
