import Image from "next/image"

import style from '../../styles/ProductRow.module.css'


export default function ProductRow({title,photo}) {
  return(
    <div>
      <h2>{title}</h2>
      <Image className={style.images} src={photo} alt="Produto" width='300px' height='250px' />
    </div>
  )
};
