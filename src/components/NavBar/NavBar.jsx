import { NavLink } from "react-router-dom";
import style from './NavBar.module.scss'

export function NavBar() {
  return (
    <nav className={style.navbarStyling}>
        <ul>
            <li>
                <NavLink to="/">FORSIDE</NavLink>
            </li>
            <li>
                <NavLink to="/products">PRODUKTER</NavLink>
            </li>
            <li>
                <h1>bageriet</h1>
            </li>
            <li>
                <NavLink to="/contact">KONTAKT</NavLink>
            </li>
            <li>
                <NavLink to="/login">LOGIN</NavLink>
            </li>
        </ul>
    </nav>
  )
}
