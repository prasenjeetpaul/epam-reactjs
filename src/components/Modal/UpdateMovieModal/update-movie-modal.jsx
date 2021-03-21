import React, { useState } from 'react';
import { ModalService } from '../modal-service';
import axios from 'axios';
import { URLS } from '../../../urls/urls.constant';
import { connect } from 'react-redux';
import { refreshMovieDataAction, updateMovieItemAction } from '../../../store';

const UpdateMovieModal = ({ movieItem, updateMovie }) => {
    movieItem.runtime = movieItem.runtime ? movieItem.runtime : '';
    const [title, setTitle] = useState(movieItem.title);
    const [releaseDate, setReleaseDate] = useState(movieItem.release_date);
    const [posterURL, setposterURL] = useState(movieItem.poster_path);
    const [genre, setGenre] = useState(movieItem.genres[0]);
    const [overview, setOverview] = useState(movieItem.overview);
    const [runtime, setRuntime] = useState(movieItem.runtime);

    const resetData = () => {
        setTitle(movieItem.title);
        setReleaseDate(movieItem.release_date);
        setposterURL(movieItem.poster_path);
        setGenre(movieItem.genres[0]);
        setOverview(movieItem.overview);
        setRuntime(movieItem.runtime);
    }

    return (
        <div className="modal-content">
            <div className="modal-action">
                <div className="modal-close-icon clickable" onClick={() => ModalService.closeModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 311.07733">
                        <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                        <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                    </svg>
                </div>
            </div>
            <div className="modal-body">
                <h1>EDIT MOVIE</h1>
                <form>
                    <div className="form-group">
                        <label>MOVIEW ID</label>
                        <input className="disabled" type="text" value={movieItem.id} placeholder="Title here" disabled />
                    </div>
                    <div className="form-group">
                        <label>TITLE</label>
                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title here" />
                    </div>
                    <div className="form-group">
                        <label>RELEASE DATE</label>
                        <input value={releaseDate} onChange={e => setReleaseDate(e.target.value)} type="date" placeholder="Select Date" />
                    </div>
                    <div className="form-group">
                        <label>POSTER URL</label>
                        <input value={posterURL} onChange={e => setposterURL(e.target.value)} type="url" placeholder="Poster URL here" />
                    </div>
                    <div className="form-group">
                        <label>GENRE</label>
                        <select value={genre} onChange={e => setGenre(e.target.value)}>
                            <option value="">Select Genre</option>
                            <option value=''>Select Genre</option>
                            <option value="Documentary">Documentary</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Horror">Horror</option>
                            <option value="Crime">Crime</option>
                            <option value="Action">Action</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Adventure">Adventure</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>OVERVIEW</label>
                        <input value={overview} onChange={e => setOverview(e.target.value)} type="text" placeholder="Overview here" />
                    </div>
                    <div className="form-group">
                        <label>RUNTIME</label>
                        <input value={runtime} onChange={e => setRuntime(e.target.value)} type="text" placeholder="Runtime here" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="secondary clickable" onClick={() => resetData()}>RESET</button>
                <button className="primary clickable" onClick={() => updateMovie({ id: movieItem.id, title, release_date: releaseDate, poster_path: posterURL, genres: [genre], overview, runtime: Number(runtime) })}>SUBMIT</button>
            </div>
        </div>
    );
}


const updateMovie = dispatch => movieItem => axios.put(URLS.MOVIE_LIST, movieItem)
    .then(data => data.data)
    .then(data => {
        ModalService.openSuccessModal('The movie has been updated successfully.');
        dispatch(refreshMovieDataAction());
        dispatch(updateMovieItemAction(data));
    })
    .catch(() => ModalService.openErrorModal('Something went wrong. Please try again after some time.'))


const mapDispatchToProps = dispatch => ({ updateMovie: updateMovie(dispatch) })

const component = connect(null, mapDispatchToProps)(UpdateMovieModal);

export { component as UpdateMovieModal }