import React from 'react'
import { MovieItem, MovieItemErrorBoundary, MovieItemData } from '../MovieItem'

export function MovieGrid() {
    const movieList = [
        new MovieItemData(
            '1',
            'Unbreakable',
            ['Drama', 'Mystery', 'Sci-Fi'],
            '2000',
            'https://m.media-amazon.com/images/M/MV5BMDIwMjAxNzktNmEzYS00ZDY5LWEyZjktM2Y0MmUzZDkyYmZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
        ),
        new MovieItemData(
            '3',
            'Split',
            ['Horror', 'Thriller'],
            '2016',
            'https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg',
        ),
        new MovieItemData(
            '2',
            'The Avengers',
            ['Action', 'Adventure', 'Sci-Fi'],
            // null, //this will cause an error which will be handled in Error Boundary
            '2012',
            'https://www.joblo.com/assets/images/oldsite/posters/images/full/02_AVG_Online1Sht_UK2_rgb_thumb.jpg',
        ),
        new MovieItemData(
            '4',
            'Glass',
            ['Drama', 'Sci-Fi', 'Thriller'],
            '2019',
            'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_.jpg',
        ),
        new MovieItemData(
            '5',
            'Joker',
            ['Crime', 'Drama', 'Thriller'],
            '2019',
            'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        ),
        new MovieItemData(
            '6',
            'Avengers: Endgame',
            ['Action', 'Adventure', 'Drama'],
            '2019',
            'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        )
    ];
    return (
        <>
            <span className="movie-count"><b>{movieList.length}</b> movies found</span>
            <div className="movie-grid">
                {movieList.map(movieItem => <MovieItemErrorBoundary key={movieItem.id}>
                    <MovieItem movieItem={movieItem} key={movieItem.id} />
                </MovieItemErrorBoundary>)}
            </div>
        </>
    )
}
