export class MovieItemData {
    constructor(id = 0, movieTitle = '', movieGenre = [], releaseDate = '', posterURL = '', subTitle = '', movieContent = '', rating = '', runtime = '') {
        this.id = id;
        this.movieTitle = movieTitle;
        this.movieGenre = movieGenre;
        this.releaseDate = releaseDate;
        this.posterURL = posterURL;
        this.subTitle = subTitle;
        this.movieContent = movieContent;
        this.rating = rating;
        this.runtime = runtime;
    }
}

export const getMovieList = () => [
    new MovieItemData(
        '1',
        'Unbreakable',
        ['Drama', 'Mystery', 'Sci-Fi'],
        '2000',
        'https://m.media-amazon.com/images/M/MV5BMDIwMjAxNzktNmEzYS00ZDY5LWEyZjktM2Y0MmUzZDkyYmZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        `A man learns something extraordinary about himself after a devastating accident.`,
        `David Dunn (Willis) is taking a train from New York City back home to Philadelphia after a job interview that didn't go well when his car jumps the tracks and collides with an oncoming engine, with David the only survivor among the 131 passengers on board. Astoundingly, David is not only alive, he hardly seems to have been touched. As David wonders what has happened to him and why he was able to walk away, he encounters a mysterious stranger, Elijah Prince (Samuel L. Jackson), who explains to David that there are a certain number of people who are "unbreakable" -- they have remarkable endurance and courage, a predisposition toward dangerous behavior, and feel invincible but also have strange premonitions of terrible events. Is David "unbreakable"? And if he is, what are the physical and psychological ramifications of this knowledge?`,
        `7.3`,
        `106`
    ),
    new MovieItemData(
        '3',
        'Split',
        ['Horror', 'Thriller'],
        '2016',
        'https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg',
        `Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.`,
        `Though Kevin (James McAvoy) has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher (Betty Buckley), there remains one still submerged who is set to materialize and dominate all of the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him -- as well as everyone around him -- as the walls between his compartments shatter.`,
        `7.3`,
        `117`
    ),
    new MovieItemData(
        '2',
        'The Avengers',
        ['Action', 'Adventure', 'Sci-Fi'],
        // null, //this will cause an error which will be handled in Error Boundary
        '2012',
        'https://www.joblo.com/assets/images/oldsite/posters/images/full/02_AVG_Online1Sht_UK2_rgb_thumb.jpg',
        `Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.`,
        `Nick Fury is the director of S.H.I.E.L.D., an international peace-keeping agency. The agency is a who's who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster which is formed by Loki and his team.`,
        `8.0`,
        `143`
    ),
    new MovieItemData(
        '4',
        'Glass',
        ['Drama', 'Sci-Fi', 'Thriller'],
        '2019',
        'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_.jpg',
        `Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.`,
        `After pursuing Kevin Wendell Crumb and the multiple identities that reside within, David Dunn finds himself locked in a mental hospital alongside his archenemy, Elijah Price. The trio must now contend with a psychiatrist, who is out to prove they do not actually possess superhuman abilities.`,
        `6.7`,
        `129`
    ),
    new MovieItemData(
        '5',
        'Joker',
        ['Crime', 'Drama', 'Thriller'],
        '2019',
        'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        `Oscar winning Movie`,
        `Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.`,
        `8.4`,
        `122`
    ),
    new MovieItemData(
        '6',
        'Avengers: Endgame',
        ['Action', 'Adventure', 'Drama'],
        '2019',
        'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        null,
        `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...`,
        `8.4`,
        `181`
    )
]