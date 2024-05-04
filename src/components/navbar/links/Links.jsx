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

  return (
    <div className={style.links}>
      {links.map(({title,path})=><NavLinks title={title} path={path} key={title}/>)}
    </div>
  )
}

export default Links
