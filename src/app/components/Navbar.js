"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/app/style/header.module.css";
import MobileNavBar from "./MobileNavBar";
const Navbar = () => {
  const [show, setshow] = useState(0);
  const nav = {
    opacity: show,
  };
  return (
    <React.Fragment>
      <div className={style.Navbar}>
        <Link href="/">
          <p className={style.navPara}>Home</p>
        </Link>
        <Link href="/movies">
          <p className={style.navPara}>Movie</p>
        </Link>
        <div className={style.MobNav}>
          <button
            onClick={() => {
              !show ? setshow(1) : setshow(0);
            }}
          >
            <Image
              src="/menu.png"
              alt="menu"
              width={30}
              height={30}
              style={{ filter: "invert(1)" }}
            />
          </button>
        </div>
      </div>
      <MobileNavBar nav={nav} setshow={setshow}/>
    </React.Fragment>
  );
};

export default Navbar;
