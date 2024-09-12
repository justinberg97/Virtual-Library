const Media = require('./Media');

class Movie extends Media {
    constructor(title, year, genre, director, duration) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
    }

summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
}
static longestMovie(movies) {
    return movies.reduce((longest, movie) => (movie.duration > longest.duration ? movie : longest), movies[0]);
  }
}

// don't change below
module.exports = Movie;