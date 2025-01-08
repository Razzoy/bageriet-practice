import style from './ProductCard.module.scss'
import { FaRegComments } from "react-icons/fa";

export function ProductCard({imgSrc, numberComments, title, text}) {
  return (
    <div className={style.productCard}>
        <img src={imgSrc}/>
        <span>
          {numberComments}
          <FaRegComments/>
        </span>
        <h3>{title}</h3>
        <p>{text.slice(0, 90)}...</p>
        <button>SE MERE</button>
    </div>
  )
}
