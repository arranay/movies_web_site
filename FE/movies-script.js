const movies = [
  {
    title: 'Побег из Шоушенка',
    rating: 9.3,
    year: 1994,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/600x900',
  },
  {
    title: 'Крёстный отец',
    rating: 9.2,
    year: 1972,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/10703959/ebf237d7-64a3-4b75-98f1-d228d54658e5/220x330',
  },
  {
    title: 'Начало',
    rating: 8.8,
    year: 2010,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%81%D0%B0%D1%83%D0%BD%D0%B4%D1%82%D1%80%D0%B5%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE.jpg/274px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%81%D0%B0%D1%83%D0%BD%D0%B4%D1%82%D1%80%D0%B5%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE.jpg',
  },
  {
    title: 'Форрест Гамп',
    rating: 8.8,
    year: 1994,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/600x900',
  },
  {
    title: 'Интерстеллар',
    rating: 8.6,
    year: 2014,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg',
  },
];

const searchInput = document.getElementById("searchInput");
const container = document.getElementById('movies-container');

function showDetails(index) {
  const movie = movies[index];
  sessionStorage.setItem('selectedMovie', JSON.stringify(movie));
  window.location.href = 'movie.html';
}

function renderMovies(list) {
  container.innerHTML = "";
  list.forEach((movie, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card shadow-sm" style="cursor: pointer;" onclick="showDetails(${index})">
          <img src="${movie.image}" class="card-img-top" style="width: 100%; height: 300px; object-fit: cover;" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">Год: ${movie.year}</p>
            <p class="card-text">Рейтинг: <strong>${movie.rating}</strong> / 10</p>
          </div>
        </div>
      `;
    container.appendChild(col);
  });
}


function updateList() {
  const query = searchInput.value.toLowerCase();
  filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
  renderMovies(filteredMovies);
}

window.addEventListener('DOMContentLoaded', () => {
  searchInput.addEventListener('input', updateList);
  updateList();
});
