import Link from "next/link";
import { useState, useEffect } from "react";
import style from '../../styles/MenuMobile.module.css'

export default function MenuMobile(){
  return (
    <div className={style.menuContent}>
      <ul>
        <li><Link href='#inicio' >Início</Link></li>
        <li><Link href='#sobre' >Sobre</Link></li>
        <li><Link href='#contato' >Contato</Link></li>
      </ul>
      </div>
  )

};
