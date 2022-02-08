import Image from "next/image"

import style from '../../styles/ProductRow.module.css'


export default function ProductRow({ title, photo, about }) {
  return (
    <div className={style.productRow}>
      <div className={style.listArea} >
        <div className={style.productList}>
          <div className={style.productListItem}>
            <h2>{title}</h2>
            <div className={style.productInfo}>
              <div className={style.productImage}><Image src={photo} alt="Produto" width='300px' height='250px' /></div>
              <div className={style.productDescription}>{about}</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
};
