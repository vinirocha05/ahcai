import Image from "next/image";
import Link from "next/link";
import style from '../../styles/Nav.module.css'

export default function Nav({changeHeader}) {
  return (
    <header style={changeHeader? {backgroundColor: 'var(--primary-color)'}:{backgroundColor: 'transparent'}} className={style.header}>
      <div className={style.headerContainer}>
      <div style={{marginLeft: '40px',}} >
        <div className={style.img} style={changeHeader? {backgroundColor: 'white'}:{backgroundColor: 'transparent'}} >
        <Image src='/assets/img/ahcai_logo.png' alt="acai" width='100px' height='100px'/>
        </div>
      </div>
      <div className={style.list}>
        <label className={style.menuHamburguer}></label>
        <ul>
          <li><Link href='#inicio' >Início</Link></li>
          <li><Link href='#sobre' >Sobre</Link></li>
          <li><Link href='#contato' >Contato</Link></li>
          </ul>

      </div>
      </div>
    </header>
  )

};
