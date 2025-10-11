function MovieCard({ title, year, rating, poster, watched, genres, onClick }) {
  return (
    <div className="col-md-3 mb-4">
      <div className={`card h-100 ${watched ? 'watched' : ''}`} onClick={onClick} style={{ cursor : 'pointer', position:'relative'}}>
        <img
          src={poster}
          className="card-img-top"
          alt={title}
          style={{ height: '400px', objectFit: 'cover' }}
        />
        {watched && (
          <span
            className="badge bg-success"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '0.9rem',
            }}
          >
            ✓ Vu
          </span>
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="badge bg-primary">{year}</span>
            <span className="badge bg-warning ms-2">⭐ {rating}/10</span>
            <br />
            <span>{(genres || []).map(
              (genre, index) => (
                  <span key={index} className="badge bg-secondary me-1">{genre}</span>
                )
            )}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
