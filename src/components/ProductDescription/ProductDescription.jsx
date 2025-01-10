import style from "./ProductDescription.module.scss";

export function ProductDescription({ imgSrc, textContent }) {
  return (
    <article className={style.productDescription}>
      <img src={imgSrc} />
      <p>{textContent}</p>
    </article>
  );
}