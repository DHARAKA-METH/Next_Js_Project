import Link from 'next/link';
import React from 'react'

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
    <div>
      {links.map(({title,path})=><Link href={path}  key={title}>{title}</Link>)}
    </div>
  )
}

export default Links
