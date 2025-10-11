import MovieCard from './MovieCard';

function MovieList({ movies, toggleWatched }) {
  // Conditional rendering : si pas de films
  if (movies.length === 0) {
    return (
      <div className="alert alert-warning">
        <p className="mb-0">Aucun film trouvé. 😢</p>
      </div>
    );
  }
  console.log("Movies reçus dans MovieList :", movies); // ← ici
  return (
    <div>
      <h3 className="mb-4">
        {movies.length} film{movies.length > 1 ? 's' : ''} trouvé{movies.length > 1 ? 's' : ''}
      </h3>
      <div className="row">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            poster={movie.poster}
            watched={movie.watched}
            genres={movie.genres}
            onClick={() => toggleWatched(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
