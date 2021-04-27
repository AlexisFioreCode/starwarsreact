function Footer() {
    return(
        <footer className="bg-dark p-2 text-center text-white">
            <p>Cette appli a été créée grâce à React JS et a l'Api Swapi</p>
        <section class="mb-4">
            {/* Facebook */}
            <a class="btn btn-outline-light btn-floating m-1" href="https://facebook.com" role="button"><i class="fab fa-facebook-f"></i></a>
            {/* Twitter */}
            <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"><i class="fab fa-twitter"></i></a>
            {/* Instagram */}
            <a class="btn btn-outline-light btn-floating m-1" href="https://instagram.com" role="button"><i class="fab fa-instagram"></i></a>
        </section>
        </footer>
    );
}

export default Footer;