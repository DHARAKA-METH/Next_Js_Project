"use client";
import React, { useState } from "react";
import NavLinks from "./navLinks/NavLinks";
import style from "./links.module.css";
import Image from "next/image";
import { logoutHandle } from "@/lib/action";

const Links = ({ session }) => {
  const [open, setoOpen] = useState(false);

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
  const isAdmin = true;
  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map(({ title, path }) => (
          <NavLinks title={title} path={path} key={title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks title={"Admin"} path={"/admin"} />
            )}
            <form action={logoutHandle}>
              <button className={style.logout}>LogOut</button>
            </form>
          </>
        ) : (
          <NavLinks title={"Login"} path={"/login"} />
        )}
      </div>
      {/* <button className={style.menuBtn} onClick={(() => setoOpen((prev) => !prev))}>Menu</button> */}
      <Image
        className={style.menuBtn}
        width={30}
        height={30}
        src="/menu.png"
        alt=""
        onClick={() => setoOpen((prev) => !prev)}
      />
      {open && (
        <div className={style.mobileLinks}>
          {links.map(({ title, path }) => (
            <NavLinks title={title} path={path} key={title} />
          ))}

          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLinks title={"Admin"} path={"/admin"} />
              )}
              <form action={logoutHandle}>
                <button className={style.logout}>LogOut</button>
              </form>
            </>
          ) : (
            <NavLinks title={"Login"} path={"/login"} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
