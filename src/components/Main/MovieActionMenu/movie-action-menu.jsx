import React, { useState } from 'react'

export function MovieActionMenu() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <React.Fragment>
            <div className="movie-item-action-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.555 515.555"
                    onClick={() => setMenuVisible(true)}>
                    <path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                    <path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                    <path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                </svg>
            </div>
            <div className={isMenuVisible ? 'movie-item-action' : 'movie-item-action hidden'}>
                <span className="close-button" onClick={() => setMenuVisible(false)}>X</span>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
