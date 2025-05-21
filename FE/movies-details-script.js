window.addEventListener('DOMContentLoaded', () => {
  const movie = JSON.parse(sessionStorage.getItem('selectedMovie'));
  console.log(movie);
  if (!movie) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('movie-image').src = movie.image;
  document.getElementById('movie-image').alt = movie.title;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-year').textContent = movie.year;
  document.getElementById('movie-rating').textContent = movie.rating;
  document.getElementById('movie-description').textContent =
    movie.description || 'Описание отсутствует.';
});
