import Image from "next/image"

import style from '../../styles/ProductRow.module.css'


export default function ProductRow({title,photo,about}) {
  return(
    <div className={style.images} >
      <h2>{title}</h2>
      <div className="productDescription">
      <div>{about}</div>
      <Image src={photo} alt="Produto" width='300px' height='250px' />
      </div>
    </div>
  )
};
