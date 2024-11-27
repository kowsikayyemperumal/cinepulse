const movies = [
  { id: 1, title: "Thunivu", image: "thunivu.jpeg" },
  { id: 2, title: "Maharaja", image: "maharaja.jpeg" },
  { id: 3, title: "Lover", image: "lover.jpg" },
  { id: 4, title: "Jai Bhim", image: "jaibhim.jpeg" },
  { id: 5, title: "Thunivu", image: "thunivu.jpeg" },
  { id: 6, title: "Vettaiyan", image: "34.jpg" },
  { id: 7, title: "Cobra", image: "cobra.jpeg" },
  { id: 8, title: "96", image: "96.jpeg" },
  { id: 9, title: "Valimai", image: "valimai.jpeg" },
  { id: 10, title: "Eeswaran", image: "Eeswaran.jpg" },
  { id: 11, title: "Meesaya Murukku", image: "29.jpg" },
  { id: 12, title: "Vadachennai", image: "21.jpg" },
  { id: 13, title: "VTV", image: "vtv.jpg" },
  { id: 14, title: "Uriyadi", image: "uriyadi.jpg" },
  { id: 15, title: "Karnan", image: "karnan.jpeg" },
  { id: 16, title: "Chennai 600028", image: "27.jpg" },
  { id: 17, title: "Maari 2", image: "28.jpg" },
  { id: 18, title: "Pisasu", image: "horror6.jpg" },
  { id: 19, title: "Maharaja", image: "maharaja.jpeg" },
  { id: 20, title: "Bachelor", image: "32.jpg" },
  { id: 21, title: "Natpe Thunai", image: "31.jpg" },
  { id: 22, title: "Jai Bhim", image: "jaibhim.jpeg" },
  { id: 23, title: "Vettaiyan", image: "34.jpg" },
  { id: 24, title: "PPK ", image: "rom6.jpg" },
  { id: 25, title: "Jailer", image: "jailer.jpg" },
  { id: 26, title: "Vaanam", image: "Vaanam.jpg" },
  { id: 27, title: "VTV", image: "vtv.jpg" },
  { id: 28, title: "The English", image: "e11.jpg" },
  { id: 29, title: "Love Today", image: "rom9.jpg" },
  { id: 30, title: "Thandavam", image: "rom8.jpg" },
  { id: 31, title: "Aamabala", image: "30.jpg" },
  { id: 32, title: "Vadachennai", image: "21.jpg" },
];


function renderMovies() {
  const movieList = document.getElementById("movie-list");
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col-md-5");
    movieCard.innerHTML = `
      <div class="card mb-1">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <button class="btn btn-danger" onclick="addToList(${movie.id})">Like</button>
        </div>
      </div>`;
    movieList.appendChild(movieCard);
  });
}

function addToList(movieId) {
  let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
  const movie = movies.find((m) => m.id === movieId);
  if (!likedMovies.some((m) => m.id === movieId)) {
    likedMovies.push(movie);
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
    alert(`${movie.title} added to My List`);
  } else {
    alert(`${movie.title} is already in My List`);
  }
}

document.addEventListener("DOMContentLoaded", renderMovies);
function renderMovies() {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; 

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col-md-3", "mb-4", "d-flex", "align-items-stretch"); 
    movieCard.innerHTML = `
      <div class="card h-100">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}" style="height: 250px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-center">${movie.title}</h5>
          <button class="btn btn-primary btn-sm w-100 mt-auto" onclick="addToList(${movie.id})">Like</button>
        </div>
      </div>`;
    movieList.appendChild(movieCard);
  });
}

document.addEventListener("DOMContentLoaded", renderMovies);




