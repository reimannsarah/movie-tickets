function MovieTheater () {
  this.movies = {};
}

function Movie (name, showtimes, firstRelease, minAge) {
  this.name = name;
  this.showtimes = showtimes;
  this.firstRelease = firstRelease;
  this.minAge = minAge;
}