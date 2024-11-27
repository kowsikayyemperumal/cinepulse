function displayLikedMovies() {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const likedMoviesList = document.getElementById("liked-movies");
  
    likedMoviesList.innerHTML = ""; 
  
    if (likedMovies.length === 0) {
      likedMoviesList.innerHTML = `<p>No movies in My List yet.</p>`;
      return;
    }
  
    likedMovies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("col-md-3", "mb-4");
      movieCard.innerHTML = `
        <div class="card">
          <img src="${movie.image}" class="card-img-top" alt="${movie.title}" style="height: 250px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title text-center">${movie.title}</h5>
            <button class="btn btn-danger btn-sm w-100 mt-2" onclick="removeMovie(${movie.id})">Dislike</button>
          </div>
        </div>`;
      likedMoviesList.appendChild(movieCard);
    });
  }
  
  function removeMovie(movieId) {
    let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    likedMovies = likedMovies.filter((movie) => movie.id !== movieId); 
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies)); 
    displayLikedMovies(); 
  }
  
  document.addEventListener("DOMContentLoaded", displayLikedMovies);
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
            <button class="btn btn-light btn-sm w-100 mt-auto" onclick="toggleLike(${movie.id})">
              <i class="bi bi-heart" id="heart-icon-${movie.id}"></i> Like
            </button>
          </div>
        </div>`;
      movieList.appendChild(movieCard);
    });
  }
  
  function toggleLike(movieId) {
    let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const heartIcon = document.getElementById(`heart-icon-${movieId}`);
  
    const movie = movies.find((m) => m.id === movieId);
  
    if (likedMovies.some((m) => m.id === movieId)) {
   
      likedMovies = likedMovies.filter((m) => m.id !== movieId);
      heartIcon.classList.remove("bi-heart-fill");
      heartIcon.classList.add("bi-heart");
    } else {
    
      likedMovies.push(movie);
      heartIcon.classList.remove("bi-heart");
      heartIcon.classList.add("bi-heart-fill");
    }
  
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  }
  
  document.addEventListener("DOMContentLoaded", renderMovies);
  
  
  