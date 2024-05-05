import Link from 'next/link';
import React from 'react'
import NavLinks from './navLinks/NavLinks';
import style from './links.module.css'

const Links = () => {

    const links = [
        {
          title: "Homepage",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "Blog",
          path: "/blog",
        },
      ];
const session=true;
const admin=true;
  return (
    <div className={style.links}>
      {links.map(({title,path})=><NavLinks title={title} path={path} key={title}/>)}
      {session ?(
        <>
        {admin && <NavLinks title={'Admin'} path={'/admin'}/>}
        <button>LogOut</button>
        </>
      ):<NavLinks title={'Login'} path={'/login'}/>}
    </div>
  )
}

export default Links
