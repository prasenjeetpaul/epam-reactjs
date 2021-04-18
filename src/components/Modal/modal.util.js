import urlRegexSafe from 'url-regex-safe';

export const MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES = {
    title: 'Title is required',
    releaseDate: 'Release date is required',
    posterURL: 'Poster URL is required',
    genre: 'Genre is required',
    overview: 'Overview is required',
    runtime: 'Runtime is required',
}

export const validateMovieData = values => {
    const errors = {};
    for (const [key, errorMessage] of Object.entries(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES)) {
        if (!values[key]) errors[key] = errorMessage;
    }

    if (values.posterURL && !urlRegexSafe({ exact: true }).test(values.posterURL)) {
        errors.posterURL = "Invalid URL";
    }

    if (values.runtime !== null && values.runtime !== undefined && typeof values.runtime === 'number' && values.runtime <= 0) {
        errors.runtime = "Invalid runtime";
    }
    return errors;
};
