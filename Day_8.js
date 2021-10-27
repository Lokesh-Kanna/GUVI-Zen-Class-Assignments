// Day_8 tasks:

// 1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//          title, which is a String representing the title of the movie
//          studio, which is a String representing the studio that made the movie
//          rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
//    and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the 
//    input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    movie_title() {
        return `The title of the movie is ${this.title}`
    }
    movie_studio() {
        return `The studio of the movie is ${this.studio}`
    }
    movie_rating() {
        return `The rating of the movie is ${this.rating}`
    }
}

const movie1 = new Movie("The Conjuring", "Warner Bros", "PG-13");
const movie2 = new Movie("The Avengers", "Marvel");
const movie3 = new Movie("Scooby-Doo", "Disney", "G");
const movie4 = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(movie2.movie_studio());
// OUTPUT
// The studio of the movie is Marvel

var movieArr = [movie1, movie4]
var getPG = (...values) => {
    newArr = [];
    for(let i = 0; i <movieArr.length; i++) {
        let movie = movieArr[i]
        newArr.push(movie.movie_rating());
    }
    console.log(newArr);
};
getPG(...movieArr);
// OUTPUT
// [ "The rating of the movie is PG-13", "The rating of the movie is PG-13" ]

//------------------------------------------------------------------------------------------------

// 3. Write a “person” class to hold all the details.
class person {
    constructor(id, age, email, address, phone) {
        this.id = id; 
        this.age = age;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
    person_id () {
        return `ID: ${this.id}`;
    }
    person_age () {
        return `Age: ${this.age}`;
    }
    person_email () {
        return `Email: ${this.email}`;
    }
    person_address () {
        return `Address: ${this.address}`;
    }
    person_phone () {
        return `Phone: ${this.phone}`;
    }
}

const lokesh = new person(101, 26, "l@gmail.com", "TN, Ind", "15243918");
const shankar = new person(102, 27, "s@gmail.com", "KL, Ind", "15226934");
const boopathi = new person(103, 26, "b@gmail.com", "MP, Ind", "17651646");

console.log(lokesh.person_address());

//---------------------------------------------------------------------------------------------------

// 4. Write a class to calculate uber price.

class Uber_Price {
    constructor(pricePerKm, totalKm) {
        this.pricePerKm = pricePerKm;
        this.totalKm = totalKm;
    }
    priceCalc() {
        let totalPrice = this.totalKm * this.pricePerKm;
        return `The total fair for this ride will be ${totalPrice} rupees.`
    }
}

var tupToCbe = new Uber_Price(8, 50);
console.log(tupToCbe.priceCalc());