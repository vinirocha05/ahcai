import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/Intro.module.css'
import { useEffect, useState } from "react";

export default function Home() {
  const [changeHeader, setChangeHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 500) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <>
      <Header changeHeader={changeHeader} />
      <div className="introImgContent">
        <div className={style.introBg}>
        </div>
      </div>
      {/*Primeira sessão*/}
      <div className={`${style.center} ${style.bgWhite}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.imgContainer}>
            <Image src='/assets/img/family_photo.jpg' alt='family' width='500px' height='300px' />
          </div>
          <div className={style.textContainer}>
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
        </div>
      </div>

      {/*Segunda sessão*/}

  )
};
