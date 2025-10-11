export function initMovieUI() {
    // Afficher / Masquer les sections
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('.movie-section');
            const moviesDiv = section.querySelector('.movies');
            moviesDiv.classList.toggle('hidden');
            button.textContent = moviesDiv.classList.contains('hidden') ? 'Afficher' : 'Masquer';
        });
    });

    // Marquer un film comme "vu"
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('watched');
        });
    });

    // Recherche et reset
    const searchInput = document.querySelector('#search');
    const resetBtn = document.querySelector('#reset-search');
    const articles = document.querySelectorAll('article');
    const noResultMsg = document.querySelector('#no-result');

    function filterMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        let anyVisible = false;

        articles.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const match = title.includes(searchTerm);
            article.style.display = match ? 'block' : 'none';
            if (match) anyVisible = true;
        });

        noResultMsg.style.display = anyVisible ? 'none' : 'block';
    }

    searchInput.addEventListener('input', filterMovies);
    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterMovies();
    });
}
