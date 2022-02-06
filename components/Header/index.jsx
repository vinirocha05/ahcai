import Image from "next/image";
import style from '../../styles/Nav.module.css'

export default function Nav() {
  return (
    <header className={style.header}>
      <div style={{marginLeft: '40px'}}>
        <Image src='/assets/img/ahcai_logo.png' alt="acai" width='200px' height='200px'/>
      </div>
      <div className={style.list}>
        <ul>
          <li>Início</li>
          <li>Produtos</li>
          <li>Contatos</li>
          </ul>

      </div>
    </header>
  )

};
