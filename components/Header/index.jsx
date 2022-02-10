import Image from "next/image";
import Link from "next/link";
import { useState} from "react";
import style from '../../styles/Nav.module.css'

export default function Nav({ changeHeader }) {

  const [mobileMenu, setMobileMenu] = useState(false)
  const handleClick = () => {
    setMobileMenu(!mobileMenu)
  }
  return (

    <header style={changeHeader ? { backgroundColor: 'var(--primary-color)' } : { backgroundColor: 'transparent' }} className={style.header}>
      <div style={mobileMenu ? { background: 'var(--primary-color)', width: '100vw', height: '100vh', display:'flex',justifyContent:'center',alignItems:'center', color:'white' } : { display: 'none' }} >
        <ul style={{listStyle:'none', fontSize:'3rem', position:'absolute',top:'20rem', overflow:'hidden'}} onClick={handleClick}>
          <li className={style.mobileList}><Link href='#inicio' >Início</Link></li>
          <li className={style.mobileList} ><Link href='#sobre' >Sobre</Link></li>
          <li className={style.mobileList} ><Link href='/produtos'>Produtos</Link></li>
          <li className={style.mobileList} ><Link href='#contato'>Contato</Link></li>
        </ul>
      </div>
      <div className={style.headerContainer}>
        <div style={{ marginLeft: '40px', }} >
          <div className={style.img} style={changeHeader ? { backgroundColor: 'white' } : { backgroundColor: 'transparent' }} >
            <Image src='/assets/img/ahcai_logo.png' alt="acai" width='100px' height='100px' />
          </div>
        </div>
        <div className={style.list}>
          <label onClick={handleClick} className={style.menuHamburguer}></label>
          <ul>
            <li><Link href='/#inicio' >Início</Link></li>
            <li><Link href='/#sobre' >Sobre</Link></li>
            <li><Link href='/produtos' >Produtos</Link></li>
            <li><Link href='/#contato' >Contato</Link></li>
          </ul>

        </div>
      </div>
    </header>
  )

};
