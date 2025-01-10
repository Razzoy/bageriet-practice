import style from "./Breadcrumb.module.scss";

export function Breadcrumb({ content }) {
  return (
    <div className={style.breadcrumb}>
      <p>{content}</p>
    </div>
  );
}