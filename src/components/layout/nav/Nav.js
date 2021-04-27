function Nav() {
    return (
        <nav className="bg-warning">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-dark Starfont" to="/accueil">Acceuil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark Starfont" to="/recherche">Recherche</a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;