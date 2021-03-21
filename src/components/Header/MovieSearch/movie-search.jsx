import React, { useState } from 'react';
import { updateFilterTitleAction } from '../../../store';
import { connect } from 'react-redux';

const MovieSearch = ({ searchValue, updateFilterTitle }) => {
    const [searchKey, setSearchKey] = useState(searchValue ? searchValue : '');
    return (
        <div className="movie-search-section">
            <h1>FIND YOUR MOVIE</h1>
            <div>
                <input type="text" value={searchKey} onChange={e => setSearchKey(e.target.value)} placeholder="What do you want to search?" />
                <button className="clickable" onClick={() => updateFilterTitle(searchKey)}>SEARCH</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({ updateFilterTitle: title => dispatch(updateFilterTitleAction(title)) });

const mapStateToProps = state => ({ searchValue: state.movieFilters.search });

const component = connect(mapStateToProps, mapDispatchToProps)(MovieSearch);

export { component as MovieSearch };