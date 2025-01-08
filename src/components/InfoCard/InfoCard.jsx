import style from './InfoCard.module.scss'

export function InfoCard({imgSrc, infoTitle, infoText}) {
    return(
        <div className={style.infoCard}>
            <img src={imgSrc} alt="" />
            <h4>{infoTitle}</h4>
            <p>{infoText}</p>
        </div>
    )
}
