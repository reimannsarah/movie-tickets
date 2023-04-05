// Business Logic

function MovieTheater () {
  this.movies = {};
}

function Movie (name, showtimes, firstRelease) {
  this.name = name;
  this.showtimes = showtimes;
  this.firstRelease = firstRelease;
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
  // let movieInput = document.querySelector("#movie-options").value;
  let showtimeChoice = document.querySelector("#showtime-options").value;
  let ticketChoice = document.querySelector("#ticket-options").value.toLowerCase();

  movieArray.map(function(movie){
    document.querySelector("#movie-options").value = movie;
    console.log(movie);
      if(movie.firstRelease === true && movie.showtimes === "11am") {
      console.log("fart");
      }else if(movie.firstRelease === false && movie.showtimes === "11am"){
        console.log("butts");
      }else if(movie.firstRelease === true && movie.showtimes !== "11am"){
        console.log ("salad");
      }else if (movie.firstRelease === false && movie.showtimes !== "11am"){
        console.log("crank");
      }
})

  }


let displayPriceDiv = document.querySelector("#displayPrice");
let pPrice = document.createElement("p");

function displayPrice(key) {
  pPrice.append(`Dennis quoted you for $${ticket[key]} :)`);
  displayPriceDiv.append(pPrice);
}




window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmit);
});