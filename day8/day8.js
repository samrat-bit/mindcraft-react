const movie = {Title: "The Dark Knight", Year: 2016, Genres: ["action", "crime"], Ratings: { rating: 7} };
const film = JSON.stringify(movie, null, 2);
console.log(film)
const favMovie = JSON.parse(film);
console.log(favMovie.Title);
console.log(favMovie.Ratings);


const invalidJSON = "{name: 'John'}";
try {
  const data = JSON.parse(invalidJSON);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON! Please check the JSON format.");
}

const original = {
  name: "Laptop",
  price: 1200
};

const copy = JSON.parse(JSON.stringify(original));

copy.price = 1500;

console.log("Original Object:", original);
console.log("Copied Object:", copy);


//Create an object for your favorite movie (title, year, genres array, ratings object). Stringify it pretty-printed 
// with 2-space indent, then parse it back and print one nested value. 5. Wrap JSON.parse of an invalid string in try/catch 
// (sneak preview of error handling) and print a friendly message instead of crashing. 6. Use the stringify→parse round trip 
// to make a copy of an object, change the copy, and prove the original is untouched.


//____Scope = where a variable can be seen and used. JavaScript has three main kinds: global, vfunction, and block scope___
// use of three scope

// const x = 1;
// function a() {
//   const x = 2;
//   if (true) {
//     const x = 3;
//     console.log(x);
//   }
//   console.log(x);
// }
// a();
// console.log(x);