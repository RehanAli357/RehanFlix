import React from "react";
import style from "@/app/style/hero.module.css";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <React.Fragment>
      <div className={style.hero}>
        <div className={style.heroContent}>
          <h1 className={style.heroHeading}>
            Explore the Best Movies of the Year
          </h1>
          <Link href="/movies">
            <button className={style.heroBtn}>Explore</button>
          </Link>
        </div>

        <div className={style.bannerImage}>
          <Image
            src="/banner.jpg"
            width={1700}
            height={600}
            alt="banner image"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
