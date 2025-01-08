import style from './SectionNewsletter.module.scss'
import { IoMailOutline } from "react-icons/io5";

export function SectionNewsletter() {
    return (
        <section className={style.sectionNewsletter}>
            <div>
                <h4>Tilmeld dig vores nyhedsbrev</h4>
                <p>Der er mange tilgængelige udgaver af lorem Ipsum</p>
                <div>
                    <IoMailOutline/>
                    <input></input>
                    <button>TILMELD</button>
                </div>
            </div>
        </section>
    )
}
