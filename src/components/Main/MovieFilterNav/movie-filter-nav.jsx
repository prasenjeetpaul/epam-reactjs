import React, { useState } from 'react'
import { connect } from 'react-redux';
import { updateFilterGenreAction, updateFilterSortByAction } from '../../../store';

const MovieFilterNav = ({ updateFilterSortBy, updateFilterGenre }) => {
    const filters = [
        { id: 1, displayName: 'ALL', value: null },
        { id: 2, displayName: 'DOCUMENTARY', value: 'Documentary' },
        { id: 3, displayName: 'COMEDY', value: 'Comedy' },
        { id: 4, displayName: 'HORROR', value: 'Horror' },
        { id: 5, displayName: 'CRIME', value: 'Crime' },
    ]
    const [selectedFilterID, setSelectedFilterID] = useState(1);

    return (
        <div className="main-nav">
            <ul>
                {filters.map(filter => (
                    <li key={filter.id}
                        className={filter.id === selectedFilterID ? 'clickable selected' : 'clickable'}
                        onClick={() => { setSelectedFilterID(filter.id), updateFilterGenre(filter.value) }}>
                        {filter.displayName}
                    </li>
                ))}
            </ul>
            <div>
                <span>SORT BY</span>
                <select onChange={event => updateFilterSortBy(event.target.value)}>
                    <option value='release_date'>RELEASE DATE</option>
                    <option value='vote_average'>RATING</option>
                    <option value='runtime'>DURATION</option>
                </select>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    updateFilterSortBy: sortBy => dispatch(updateFilterSortByAction(sortBy)),
    updateFilterGenre: genre => dispatch(updateFilterGenreAction(genre))
})

const component = connect(null, mapDispatchToProps)(MovieFilterNav);

export { component as MovieFilterNav }