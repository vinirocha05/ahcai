import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/Intro.module.css'
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {
  const [changeHeader,setChangeHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 800) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
  }, []);

  return (
    <section>
      <Header changeHeader={changeHeader}/>
      <div className={style.introBg}>
      </div>

      {/*Primeira sessão*/}
      <div className={style.alignContent} id='inicio'>
        <div className={style.contentBox}>
          <div className="contentImage">
            <Image src='/assets/img/family_photo.jpg' alt='family' width='700px' height='500px' />
          </div>
          <div className={style.bgWhite}>
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
        </div>
      </div>

      {/*Segunda sessão*/}

      <div className={`${style.alignContent} ${style.bgRoxo}`}>
        <div className={style.contentBox}>
          <div className={`${style.bgRoxo}`} >
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
          <div className={`${style.bgRoxo}`}>
            <Image src='/assets/img/family_photo.jpg' alt='family' width='700px' height='500px' />
          </div>
        </div>
      </div>
      {/*Terceira sessão*/}
      <div className={style.alignContent}>
        <div className={style.contentBox}>
          <div className="contentImage">
          <iframe style={{border: 'none',borderRadius:'5px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4591300944016!2d-47.81648918544224!3d-21.173912483656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf568c5abe11%3A0xd8bfa3bf81b7a6b1!2sAh*21%C3%A7ai%20Del%C3%ADcias%20Brasileiras!5e0!3m2!1spt-BR!2sbr!4v1644189555506!5m2!1spt-BR!2sbr" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className={style.bgWhite}>
            <h2>Chega mais</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
};
