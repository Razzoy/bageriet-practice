import style from './ProductPageWrapper.module.scss'

export function ProductPageWrapper({children}) {
  return (
    <div className={style.wrapperStyling}>{children}</div>
  )
}
