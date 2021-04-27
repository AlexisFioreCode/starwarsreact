function Footer() {
    return(
        <footer className="bg-dark p-2 text-center text-white">
            <p>Cette appli a été créée grâce à React JS et a l'Api Swapi</p>
        <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com" role="button"><i className="fab fa-facebook-f"></i></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"><i className="fab fa-twitter"></i></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com" role="button"><i className="fab fa-instagram"></i></a>
        </section>
        </footer>
    );
}

export default Footer;