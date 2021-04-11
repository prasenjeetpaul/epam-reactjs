import React, { useEffect } from 'react';
import { updateFilterTitleAction } from '../../../store';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useFormik } from 'formik';

const MovieSearch = ({ updateFilterTitle }) => {
    const { searchTerm } = useParams();
    const formik = useFormik({ initialValues: { searchTerm: searchTerm ? searchTerm : '' } });
    const history = useHistory();
    const navigateToMovieSearch = searchTerm => history.push(`/search/${searchTerm}`);

    useEffect(() => updateFilterTitle(searchTerm), [searchTerm]);

    return (
        <div className="movie-search-section">
            <h1>FIND YOUR MOVIE</h1>
            <div>
                <input name="searchTerm" type="text" value={formik.values.searchTerm} onChange={formik.handleChange} placeholder="What do you want to search?" />
                <button className="clickable" onClick={formik.values.searchTerm ? () => navigateToMovieSearch(formik.values.searchTerm) : null}>SEARCH</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({ updateFilterTitle: title => dispatch(updateFilterTitleAction(title)) });

const component = connect(null, mapDispatchToProps)(MovieSearch);

export { component as MovieSearch };