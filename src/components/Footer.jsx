function Footer() {
    return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
            </a>
            <span className="text-muted">© 2025 StreamFlix, Inc</span>
        </div>

        <div className="col-md-4 d-flex justify-content-end">
            <ul className="nav col-md-4 align-items-center  list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="https://x.com/"><i className="bi bi-twitter-x"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="https://fr-fr.facebook.com/"><i className="bi bi-facebook"></i></a></li>
            </ul>
        </div>

    </footer>

    );
}

export default Footer;