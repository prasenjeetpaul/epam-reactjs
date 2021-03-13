import React, { useState } from 'react'

export const MovieFilterNav = () => {
    const filters = [
        { displayName: 'ALL', id: 1 },
        { displayName: 'DOCUMENTARY', id: 2 },
        { displayName: 'COMEDY', id: 3 },
        { displayName: 'HORROR', id: 4 },
        { displayName: 'CRIME', id: 5 },
    ]
    const [selectedFilterID, setSelectedFilterID] = useState(1);

    return (
        <div className="main-nav">
            <ul>
                {filters.map(filter => (
                    <li key={filter.id}
                        className={filter.id === selectedFilterID ? 'clickable selected' : 'clickable'}
                        onClick={() => setSelectedFilterID(filter.id)}>
                        {filter.displayName}
                    </li>
                ))}
            </ul>
            <div>
                <span>SORT BY</span>
                <select>
                    <option>RELEASE DATE</option>
                    <option>RATING</option>
                    <option>DURATION</option>
                </select>
            </div>
        </div>
    );
}
