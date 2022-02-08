import Image from "next/image"

import style from '../../styles/ProductRow.module.css'


export default function ProductRow({ title, photo, about, scrollX }) {
  return (
      <div className={style.productRow}>
        <div className={style.listArea} >
          <div className={style.productList} style={{marginLeft:`${scrollX/2}px`}}>
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
