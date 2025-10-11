import logo from "../assets/logo.jpg"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center"
          />
          StreamFlix
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Accueil</a>
                <a className="nav-item nav-link" href="/#hero">A l'affiche</a>
                <a className="nav-item nav-link" href="/#popular">Populaires</a>
                <a className="nav-item nav-link" href="/#now-playing">En ce moment</a>
                <a className="nav-item nav-link" href="/QuizHome">Quiz Cinéma</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;