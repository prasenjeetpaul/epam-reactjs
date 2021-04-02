import React from 'react';
import { ModalService } from '../modal-service';
import axios from 'axios';
import { URLS } from '../../../urls/urls.constant';
import { connect } from 'react-redux';
import { refreshMovieDataAction } from '../../../store';
import { useFormik } from 'formik';
import { validateMovieData } from '../modal.util';

const AddMovieModal = ({ addMovie }) => {
    const genreOptions = ['Documentary', 'Comedy', 'Horror', 'Crime'];
    const initialValues = { title: '', releaseDate: '', posterURL: '', genre: '', overview: '', runtime: '' };

    const formik = useFormik({
        initialValues,
        validate: validateMovieData,
        initialErrors: validateMovieData(initialValues)
    });

    const onSubmit = () => {
        if (formik.isValid) {
            const { title, releaseDate, posterURL, genre, overview, runtime } = formik.values;
            addMovie({ title, release_date: releaseDate, poster_path: posterURL, genres: [genre], overview, runtime })
        } else {
            formik.setTouched({ title: true, releaseDate: true, posterURL: true, genre: true, overview: true, runtime: true });
        }
    }

    return (
        <div className="modal-content">
            <div className="modal-action">
                <div className="modal-close-icon clickable">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 311.07733"
                        onClick={() => ModalService.closeModal()}>
                        <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                        <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                    </svg>
                </div>
            </div>
            <div className="modal-body">
                <h1>ADD MOVIE</h1>
                <form>
                    <div className="form-group">
                        <label>TITLE</label>
                        <input name="title" type="text" placeholder="Title here"
                            className={formik.touched.title && formik.errors.title ? 'error' : null}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.title && formik.errors.title && <span className="error-message">{formik.errors.title}</span>}
                    </div>
                    <div className="form-group">
                        <label>RELEASE DATE</label>
                        <input name="releaseDate" type="date" placeholder="Select Date"
                            className={formik.touched.releaseDate && formik.errors.releaseDate ? 'error' : null}
                            value={formik.values.releaseDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.releaseDate && formik.errors.releaseDate && <span className="error-message">{formik.errors.releaseDate}</span>}
                    </div>
                    <div className="form-group">
                        <label>POSTER URL</label>
                        <input name="posterURL" type="url" placeholder="Poster URL here"
                            className={formik.touched.posterURL && formik.errors.posterURL ? 'error' : null}
                            value={formik.values.posterURL}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.posterURL && formik.errors.posterURL && <span className="error-message">{formik.errors.posterURL}</span>}
                    </div>
                    <div className="form-group">
                        <label>GENRE</label>
                        <select name="genre"
                            className={formik.touched.genre && formik.errors.genre ? 'error' : null}
                            value={formik.values.genre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <option value='' disabled>Select Genre</option>
                            {genreOptions.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                        </select>
                        {formik.touched.genre && formik.errors.genre && <span className="error-message">{formik.errors.genre}</span>}
                    </div>
                    <div className="form-group">
                        <label>OVERVIEW</label>
                        <input name="overview" type="text" placeholder="Overview here"
                            className={formik.touched.overview && formik.errors.overview ? 'error' : null}
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.overview && formik.errors.overview && <span className="error-message">{formik.errors.overview}</span>}
                    </div>
                    <div className="form-group">
                        <label>RUNTIME</label>
                        <input name="runtime" type="number" placeholder="Runtime here"
                            className={formik.touched.runtime && formik.errors.runtime ? 'error' : null}
                            value={formik.values.runtime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.runtime && formik.errors.runtime && <span className="error-message">{formik.errors.runtime}</span>}
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="secondary clickable" onClick={formik.resetForm}>RESET</button>
                <button className="primary clickable" onClick={onSubmit}>SUBMIT</button>
            </div>
        </div>
    );
}

const addMovie = dispatch => movieItem => axios.post(URLS.MOVIE_LIST, movieItem)
    .then(() => {
        ModalService.openSuccessModal('The movie has been added to database successfully.');
        dispatch(refreshMovieDataAction());
    })
    .catch(() => ModalService.openErrorModal('Something went wrong. Please try again after some time'));

const mapDispatchToProps = dispatch => ({ addMovie: addMovie(dispatch) })

const component = connect(null, mapDispatchToProps)(AddMovieModal);

export { component as AddMovieModal }