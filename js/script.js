function MovieTheater () {
  this.movies = {};
}

function Movie (name, showtimes, firstRelease, minAge) {
  this.name = name;
  this.showtimes = showtimes;
  this.firstRelease = firstRelease;
  this.minAge = minAge;
  this.matinee = false;
  this.tickets = {};
}

function Ticket (childPrice, studentPrice, adultPrice, seniorPrice) {
  this.child = childPrice;
  this.student = studentPrice;
  this.adult = adultPrice;
  this.senior = seniorPrice;
}