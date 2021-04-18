import React from 'react';
import { ModalService } from '../modal-service';
import axios from 'axios';
import { URLS } from '../../../urls/urls.constant';
import { connect } from 'react-redux';
import { refreshMovieDataAction, deleteMovieItemAction } from '../../../store';

export const DeleteMovieModalComponent = ({ movieID, deleteMovie }) => (
    <div className="modal-content">
        <div className="modal-action">
            <div className="modal-close-icon clickable">
                <svg xmlns="http://www.w3.org/2000/svg" data-testid="close-icon" viewBox="0 0 311 311.07733" onClick={() => ModalService.closeModal()}>
                    <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                    <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                </svg>
            </div>
        </div>
        <div className="modal-body">
            <h1>DELETE MOVIE</h1>
            <span>Are you sure you want to delete this movie?</span>
        </div>
        <div className="modal-footer">
            <button className="primary clickable" onClick={() => deleteMovie(movieID)}>CONFIRM</button>
        </div>
    </div>
);


export const deleteMovie = dispatch => movieID => axios.delete(`${URLS.MOVIE_LIST}/${movieID}`)
    .then(data => data.data)
    .then(() => {
        ModalService.openSuccessModal('The movie has been deleted from the database successfully.');
        dispatch(refreshMovieDataAction());
        dispatch(deleteMovieItemAction(movieID));
    })
    .catch(() => ModalService.openErrorModal('Something went wrong'));

const mapDispatchToProps = dispatch => ({ deleteMovie: deleteMovie(dispatch) })

const component = connect(null, mapDispatchToProps)(DeleteMovieModalComponent);

export { component as DeleteMovieModal }