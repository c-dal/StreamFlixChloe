function HeroSection({film}) {
    if (!film) return null;
    return (
        <div className="hero hero-container" id="hero">
            <img
                src={film.poster}
                alt={film.title}
                className="hero-image"
            />
            <div className="hero-overlay"></div>

            <div className="hero-text">
                <h2>{film.title}</h2>
                <p>⭐ {film.rating}</p>
            </div>
        </div>
    );
};

export default HeroSection;