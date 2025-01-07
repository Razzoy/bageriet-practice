import style from './Footer.module.scss'

export function Footer() {
  return (
    <>
      <div className={style.footerContainer}>
        <span>
          <img src="src/assets/icons/chevron.png" />
        </span>
        <h3>bageriet</h3>
        <p>Der er mange udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>
      </div>
    </>
  )
}
