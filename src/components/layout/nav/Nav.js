import {Link} from "react-router-dom";
function Nav() {
    return (
        <nav className="bg-warning">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link text-dark Starfont" to="/acceuil">Acceuil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark Starfont" to="/recherche">Recherche</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;