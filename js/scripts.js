// maxsus funksiya yasab olamiz u berilgan malumotlarga ko'ra arrayni filterlab kerakli obektlarni topib chiqarib beradi.

var findMovies = function (searchRegex, minimumRating = 0, genre){
  return movies.filter (function(movie){
    var doesMatchCategory = genre === `All` || movie.categories.includes(genre);

    return movie.title.match(searchRegex) && movie.imdbRating >= minimumRating && doesMatchCategory;
  });
};


// DOM ga oid narsalar

var elSearchForm = $_(`.js-search-form`);
if (elSearchForm) {
var elTitleInput = $_(`.js-search-form__title-input`, elSearchForm);
var elRaitingInput = $_(`.js-search-form__rating-input`, elSearchForm);
var elGenreSelect = $_(`.js-search-form__genre-select`, elSearchForm);
var elSortingSelect = $_(`.js-search-form__sort-select`, elSearchForm);
};


var elBookmarkedMovies = $_(`.bookmarked-movies`);

var elSearchResults = $_(`.search-results`);

var elSearchResultTemplate = $_(`#search-result-template`).content;
var elBookmarkedMovieTemplate = $_(`#bookmarked-movie-template`).content;
var elPlaginationItemTemplate = $_(`#pagination-item-template`).content;

// DOM yordamchi funksiyalar

var createMovieCard = function (movie) {
  var elMovie = elSearchResultTemplate.cloneNode(true);

  $_('.movie__poster', elMovie).src = movie.smallPoster;
  $_('.movie__poster', elMovie).alt = `Poster of ${movie.title}`;
  $_('.movie__title', elMovie).textContent = movie.title;
  $_('.movie__year', elMovie).textContent = movie.year;
  $_('.movie__rating', elMovie).textContent = movie.imdbRating;
  $_('.movie__trailer-link', elMovie).href = movie.trailer;
  $_('.js-movie-modal-opener', elMovie).dataset.imdbId = movie.imdbId;
  $_('.js-movie-bookmark', elMovie).dataset.imdbId = movie.imdbId;

  return elMovie;
};


var displayMovies = function (movies) {
  var elMoviesFragment = document.createDocumentFragment();
  elSearchResults.innerHTML = ``;

  movies.forEach(function(movie) {
    elMoviesFragment.appendChild(createMovieCard(movie));
  });

  elSearchResults.appendChild(elMoviesFragment);
};


// Event Listener Hodisaga quloq soluvchi.

elSearchForm.addEventListener (`submit`, function(evt){
  evt.preventDefault();

  var searchRegex = new RegExp(elTitleInput.value.trim(), `gi`);
  var minimumRating = Number(elRaitingInput.value);
  var genre = elGenreSelect.value;

  displayMovies(findMovies(searchRegex, minimumRating, genre));
});