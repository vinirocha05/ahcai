import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import Header from "../components/Header";
import Footer from "../components/Footer";

import style from '../styles/Intro.module.css'
import { useEffect, useState } from "react";

export default function Home() {
  const [changeHeader, setChangeHeader] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const [x, setX] = useState(1800)

  const dados = async () => {
    fetch('http://localhost:3000/api/produtos')
      .then(resp => resp.json())
      .then(dados => setProdutos(dados))
  }
  useEffect(() => {
    dados()
    const scrollListener = () => {
      if (window.scrollY > 500) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);
  }, []);

  const handleClickLeft = () => {
    x += 1800
    if (x > 1800) {
      x = 1800;
    }
    setX(x);
  }
  const handleClickRight = () => {
    x -= 1800
    if (x < -3600) {
      x = -3600;
    }
    setX(x);
  };

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

      <div className={`${style.center} ${style.bgRoxo}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.textContainer}>
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
          <div>
            <video className={style.video} src="./assets/videos/ahcai_video.mp4 " controls type='video/mp4'></video>
          </div>
        </div>
      </div>




      {/*Terceira sessão*/}

      <div className={`${style.center} ${style.bgWhite}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.textContainer}>
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
          </div>
          <div>
            <video className={style.video} src="./assets/videos/ahcai_video.mp4 " controls type='video/mp4'></video>
          </div>
        </div>
      </div>


      {/*Quinta sessão*/}
      <div className={`${style.center} ${style.bgWhite}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.mapContainer}>
            <iframe style={{ border: 'none', borderRadius: '5px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4591300944016!2d-47.81648918544224!3d-21.173912483656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf568c5abe11%3A0xd8bfa3bf81b7a6b1!2sAh*21%C3%A7ai%20Del%C3%ADcias%20Brasileiras!5e0!3m2!1spt-BR!2sbr!4v1644189555506!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className={style.textContainer}>
            <h2>Onde todo mundo se encontra</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat alias ipsam tenetur distinctio! Quas autem voluptas in consectetur aspernatur veritatis architecto praesentium iste amet, laboriosam minus, sint dolorum doloremque!</p>
            <div className={style.iconsContainer}>
              <Link href='https://whatsa.me/5516981584145/?t=Oii!%20Gostaria%20de%20saber%20mais%20sobre%20o%20A%C3%A7ai!' passHref><a><FaWhatsapp /></a></Link>
              <Link href='https://www.ifood.com.br/delivery/ribeirao-preto-sp/ahcai-delicias-brasileiras-centro/33b49dfc-40cd-4bae-baff-028964ab516d?UTM_Medium=share' passHref><a><span><Image src='/assets/img/ifood-logo.svg' alt='Link para o ifood ' width='65px' height='45px' /></span></a></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
};
