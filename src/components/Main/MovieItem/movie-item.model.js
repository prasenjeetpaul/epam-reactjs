export class MovieItemData {
    constructor(id = 0, movieTitle = '', movieGenre = [], releaseDate = '', posterURL = '') {
        this.id = id;
        this.movieTitle = movieTitle;
        this.movieGenre = movieGenre;
        this.releaseDate = releaseDate;
        this.posterURL = posterURL;
    }
}