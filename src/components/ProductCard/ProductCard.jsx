import { NavLink } from 'react-router-dom';
import style from './ProductCard.module.scss'
import { FaRegComments } from "react-icons/fa";

export function ProductCard({imgSrc, numberComments, title, text, id}) {
  return (
    <div className={style.productCard}>
        <img src={imgSrc}/>
        <span>
          {numberComments}
          <FaRegComments/>
        </span>
        <h3>{title}</h3>
        <p>{text.slice(0, 90)}...</p>
        <NavLink to={`/products/${id}`}>SE MERE</NavLink>
    </div>
  )
}
