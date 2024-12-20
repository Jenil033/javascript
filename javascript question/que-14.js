function findMoviePosition(movies, movieName) {
    return movies.indexOf(movieName);
}

const movies = ["Inception", "Avatar", "Titanic"];
const position = findMoviePosition(movies, "Avatar");

console.log(position); 