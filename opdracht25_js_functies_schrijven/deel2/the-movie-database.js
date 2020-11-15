const movieDataBase = function(movieTitle, movieDuration, stars){
    movieTitle = "The Godfather";
    movieDuration = 180;
    stars=['Robert de Niro, Al Pacino, Marlon Brando'];
console.log(movieTitle + " lasts for " + movieDuration + " minutes. Stars: " +stars);
};

movieDataBase();

// Antwoord:
// var myFavMovie = {
//     title: 'Puff the Magic Dragon',
//     duration: 30,
//     stars: ['Puff', 'Jackie', 'Living Sneezes']
// };

// function printMovie(movie) {
//     console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
//     var starsString = 'Stars: ';
//     for (var i = 0; i < movie.stars.length; i++) {
//         starsString += movie.stars[i];
//         if (i != movie.stars.length -1) {
//             starsString += ', ';
//         }
//     }
//     console.log(starsString);
// }

// // Or...
// function printMovie(movie) {
//     console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
//     console.log('It stars ' + movie.stars.join(', '));
// }
// printMovie(myFavMovie);

// const myFavMovie = {
//     title: "Puff the Magic Dragon",
//     duration: 220,
//     stars: ["Puff", "Jackie", "Living Sneezes"]
//   };
  
//   // De oplossing met een for loop
//   const printMovie1 = function(movie) {
//     console.log(movie.title + " lasts for " + movie.duration + " minutes");
//     let starsString = "Stars: ";
//     for (let i = 0; i < movie.stars.length; i++) {
//       starsString += movie.stars[i];
//       // Uigebreide syntax: starsString = starsString + movie.stars[i]
//       if (i !== movie.stars.length - 1) {
//         starsString += ", ";
//       }
//     }
//     console.log(starsString);
//   };
  
//   // De oplossing met een array.join
//   const printMovie2 = function(movie) {
//     console.log(movie.title + " lasts for " + movie.duration + " minutes");
//     console.log("It stars: " + movie.stars.join(", "));
//   };
//   printMovie1(myFavMovie);
//   printMovie2(myFavMovie);
  