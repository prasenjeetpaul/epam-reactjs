import React from 'react'

export function MovieFilterNav() {
    return (
        <div className="main-nav">
            <ul>
                <li className="clickable selected">ALL</li>
                <li className="clickable">DOCUMENTARY</li>
                <li className="clickable">COMEDY</li>
                <li className="clickable">HORROR</li>
                <li className="clickable">CRIME</li>
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
    )
}
