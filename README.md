Describe: MovieTheater();

Test: "Will create an empty object called movies"
Code: let theater = new MovieTheater ();
>theater;
Expected Output: movies: {};


//
Describe: Movie();

Test: "It should create a movie object with properties including name, showtimes, first-release and tickets"
Code: let johnWick = new Movie ("John Wick", ["11am", "1pm", "6pm", "10pm"], true);
>johnWick;
Expected Output: Movie: {name: 'John Wick', showtimes: Array(4), firstRelease: true, tickets: {…}}


//
Describe: Ticket();

Test: "It should create a ticket object with properties including pricing for child, student, senior and adult"
Code: let price = new Ticket (0,5,8,4);
price;
Expected Output: Ticket {child: 0, student: 5, adult: 8, senior: 4}