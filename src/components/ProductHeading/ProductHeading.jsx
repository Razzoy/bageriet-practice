import style from "./ProductHeading.module.scss";

export function ProductHeading({ productTitle, productSubtitle }) {
  return (
    <section className={style.productHeading}>
      <div>
        <h4>{productTitle}</h4>
        <h5>{productSubtitle}</h5>
      </div>

      <button>Like</button>
    </section>
  );
}