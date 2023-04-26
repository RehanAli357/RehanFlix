import React from "react";

import Navbar from "./Navbar";

import Image from "next/image";
import Link from "next/link";

import style from "@/app/style/header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <header className={style.Header}>
        <Link href="/">
          <div className={style.Image}>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <b
              style={{
                fontSize: "2rem",
                color: "wheat",
                position: "absolute",
                top: "0.7em",
                left: "2.7em",
              }}
            >
              RehanFlix
            </b>
          </div>
        </Link>
        <Navbar />
      </header>
    </React.Fragment>
  );
};

export default Header;
