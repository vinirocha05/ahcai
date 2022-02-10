import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import style from '../styles/Intro.module.css'
import { useEffect, useState } from "react";

export async function getStaticProps(){
  const dados = await fetch('http://localhost:3000/api/produtos')
  const produtos = await dados.json()

  return{
    props:{
      produtos,
    }
  }
}

export default function Produtos({produtos}) {
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
            <Image src={produtos[0].photo} alt='family' width='500px' height='300px' />
          </div>
          <div className={style.textContainer}>
            <h2>O melhor ahçaí de todos</h2>
            <p>Como uma incrível combinação de sabor, cremosidade e os melhores ingredientes do mercado nosso açaí é conhecido por encantar todos que experimentam</p>
          </div>
        </div>
      </div>

      {/*Segunda sessão*/}

      <div className={`${style.center} ${style.bgRoxo}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.textContainer}>
            <h2>Sorvetes</h2>
            <p>No calor de Ribeirão nada melhor do que um sorvete paa refrescar. Ainda melhor se o sorvete for da Pimpinela, famosa pela qualdiade dos servetes produzidos. </p>
          </div>
          <div>
            <Image src={produtos[1].photo} alt='family' width='500px' height='300px' />
          </div>
        </div>
      </div>

      {/*Primeira sessão*/}
      <div className={`${style.center} ${style.bgWhite}`} id='inicio'>
        <div className={style.contentBox}>
          <div className={style.imgContainer}>
            <Image src={produtos[2].photo} alt='family' width='500px' height='300px' />
          </div>
          <div className={style.textContainer}>
            <h2>Água de coco</h2>
            <p>Para se manter hidratado é importante beber bastante água, melhor ainda se for uma Água de Coco geladinha </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};
