import React, { useState } from 'react'
import { ModalService } from '../../Modal';

export const MovieActionMenu = ({ movieItem }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <React.Fragment>
            <div className="movie-item-action-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.555 515.555"
                    onClick={event => { event.stopPropagation(); setMenuVisible(true) }}>
                    <path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                    <path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                    <path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
                </svg>
            </div>
            <div className={isMenuVisible ? 'movie-item-action' : 'movie-item-action hidden'}>
                <div className="close-button clickable">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 311.07733" onClick={event => { event.stopPropagation(); setMenuVisible(false) }}>
                        <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                        <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                    </svg>
                </div>
                <ul>
                    <li onClick={event => { event.stopPropagation(); ModalService.openUpdateMovieModal(movieItem) }}>Edit</li>
                    <li onClick={event => { event.stopPropagation(); ModalService.openDeleteMovieModal(movieItem.id) }}>Delete</li>
                </ul>
            </div>
        </React.Fragment>
    );
}
