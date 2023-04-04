// Business Logic

function MovieTheater () {
  this.movies = {};
}

function Movie (name, showtimes, firstRelease) {
  this.name = name;
  this.showtimes = showtimes;
  this.firstRelease = firstRelease;
  this.matinee = false;
  this.tickets = {};
}

function Ticket (childPrice, studentPrice, adultPrice, seniorPrice) {
  this.child = childPrice;
  this.student = studentPrice;
  this.adult = adultPrice;
  this.senior = seniorPrice;
}

Movie.prototype.addTicket = function(ticket) {
  this.tickets = ticket;
}

MovieTheater.prototype.addMovie = function(movie) {
  this.movies[movie.name] = movie;
}

let theater = new MovieTheater();
let cocaineBear = new Movie("Cocaine Bear", ["11am", "1pm", "6pm", "10pm"], true);
let johnWick = new Movie("John Wick: Chapter 4", ["11am", "1pm", "6pm", "10pm"], true);
let snatch = new Movie("Snatch", ["11am", "1pm", "6pm", "10pm"], false);
let avatar = new Movie("Avatar: Way of Water", ["11am", "1pm", "6pm", "10pm"], false);
let ticket = new Ticket(0,5,8,4);
let movieArray = [cocaineBear, johnWick, snatch, avatar];

movieArray.map(function(movie){
  movie.addTicket(ticket);
  theater.addMovie(movie);  
});



// UI Logic

function handleFormSubmit(event) {
  event.preventDefault();
  let movie = document.querySelector("#movie-options").value;
  let showtime = document.querySelector("#showtime-options").value;
  let ticketChoice = document.querySelector("#ticket-options").value.toLowerCase();

  const ticketKeys = Object.keys(ticket);
  ticketKeys.forEach(function (ticketKey) {
    // if (movie.firstRelease == true && movie.matinee == false){
      // let price = displayPrice(ticketKey);
      // console.log(price);

    });
    // if(key === ticketChoice){
    //   displayPrice(key, )
    //   console.log(ticket[key]);
    // }
  // });
}

let displayPriceDiv = document.querySelector("#displayPrice");
let pPrice = document.createElement("p");

function displayPrice(key) {
  pPrice.append(`Dennis quoted you for $${ticket[key]} :)`);
  console.log(pPrice);
  displayPriceDiv.append(pPrice);
}




window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});