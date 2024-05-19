import React from "react";
import Links from "./links/Links";
import style from "./Navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <div>
      <div className={style.container}>
        <Link href="/">
          <div className={style.logo}>Logo</div>
        </Link>
        <div>
          <Links session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
