import { useState, useEffect } from 'react';
import { getPopularMovies, getNowPlayingMovies, getTopRatedMovie } from '../services/tmdbApi';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import Welcome from '../components/Welcome';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  // Pour récupérer les films
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  
  // Pour contrôler l'affichage des sections
  const [showPopular, setShowPopular] = useState(true);
  const [showNowPlaying, setShowNowPlaying] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction asynchrone pour charger les films
    async function loadMovies() {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies();
        setPopularMovies(popularMovies);
        setError(null);
      } catch (err) {
        setError('Impossible de charger les films populaires');
        console.error(err);
      } finally {
        setLoading(false);
      }
      try {
        setLoading(true);
        const nowPlayingMovies = await getNowPlayingMovies();
        setNowPlayingMovies(nowPlayingMovies);
        setError(null);
      } catch (err) {
        setError('Impossible de charger les films du moment');
        console.error(err);
      } finally {
        setLoading(false);
      }
      try {
        setLoading(true);
        const topMovie = await getTopRatedMovie();
        setTopMovie(topMovie);
        setError(null);
      } catch (err) {
        setError('Impossible de charger le film à l\'affiche');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []); // Chargement unique au montage

  const toggleWatched = (movieId) => {
    setPopularMovies(prev =>
      prev.map(movie =>
        movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
      )
    );
    setNowPlayingMovies(prev =>
      prev.map(movie =>
        movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <Welcome />
        <HeroSection film={topMovie} />
        <SignUpForm />
        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3">Chargement des films...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        {!loading && !error && 
          <>
            <h2 id="popular">Films populaires</h2>
              <button
                className="btn btn-secondary mb-3"
                onClick={() => setShowPopular(prev => !prev)} // pour la section populaire
              >
                {showPopular ? 'Masquer' : 'Afficher'}
              </button>
              {showPopular && <MovieList movies={popularMovies} toggleWatched={toggleWatched} />}
            <h2 id="now-playing">Films du moment</h2>
              <button
                className="btn btn-secondary mb-3"
                onClick={() => setShowNowPlaying(prev => !prev)} // pour la section populaire
              >
                {showNowPlaying ? 'Masquer' : 'Afficher'}
              </button>
              {showNowPlaying && <MovieList movies={nowPlayingMovies} toggleWatched={toggleWatched} />}
          </>
        }
      </div>
      <Footer />
    </>
  );
}

export default Home;
