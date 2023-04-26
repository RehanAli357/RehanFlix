import React from "react";
import style from "@/app/style/footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={style.footer}>
        <section className={style.section}>
          <p>
            This Website gives you the information of all the movies present in
            the netflix. So next time you need not to be confused which movie to
            watch.
          </p>
        </section>
        <section className={style.section}>
          <ul>
            <li className={style.listItem} >mohdrehan@gmail.com</li>
            <li className={style.listItem}>+91-7017337726</li>
            <li className={style.listItem}>E4/280F Taj Nagri Phase 2 Agra</li>
            <li className={style.listItem} >
              <a href="https://github.com/RehanAli357">
              <Image src="/github.png" height={30} width={30} alt="github"/>
              </a>
             <a href="https://www.linkedin.com/in/rehan-ali-b97964247">
             <Image src="/linkedin.png" height={30} width={30} alt="linkedin"/>
             </a>
             <a href="https://www.instagram.com/invites/contact/?=8xqkt1kh3gt&utm_content=cdnjx65">
             <Image src="/instagram.png" height={30} width={30} alt="instagram"/>
             </a>
             <a href="https://wa.me/917017337726">
             <Image src="/whatsapp.png" height={30} width={30} alt="whatsapp"/>
             </a>
              </li>
          </ul>
        </section>
        <section className={style.section}>
        <Link href="/">
            <Image 
            src="/logo.png"
            alt="logo" 
            width={100} height={100}/>
          </Link>
          <Link href="/movies">
            <button className={style.btn}>Explore Movies</button>
          </Link>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
