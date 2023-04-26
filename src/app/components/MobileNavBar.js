'client site'

import React from 'react'
import style from "@/app/style/header.module.css";
import Link from 'next/link';
const MobileNavBar = ({nav,setshow}) => {
   const Opacity = ()=>{
        setshow(0);
   }
  return (
    <React.Fragment>
        <div className={style.MobNav2} style={nav}>
            <Link href="/">
              <p className={style.MobnavPara} onClick={Opacity}>Home</p>
            </Link>
            <Link href="/movies">
              <p className={style.MobnavPara} onClick={Opacity}>Movie</p>
            </Link>
          </div>
    </React.Fragment>
  )
}

export default MobileNavBar
