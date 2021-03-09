import React from 'react';
import { ModalService } from '../modal-service';

export function UpdateMovieModal() {
    return (
        <div className="modal-content">
            <div className="modal-action">
                <div className="modal-close-icon clickable" onClick={() => {
                    ModalService.emitResult(false)
                    ModalService.closeModal();
                }}>
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
                        <input className="disabled" type="text" value="M032820TH" placeholder="Title here" disabled />
                    </div>
                    <div className="form-group">
                        <label>TITLE</label>
                        <input type="text" defaultValue="Moana" placeholder="Title here" />
                    </div>
                    <div className="form-group">
                        <label>RELEASE DATE</label>
                        <input type="date" placeholder="Select Date" />
                    </div>
                    <div className="form-group">
                        <label>MOVIE URL</label>
                        <input type="url" placeholder="Movie URL here" />
                    </div>
                    <div className="form-group">
                        <label>GENRE</label>
                        <select>
                            <option>Select Genre</option>
                            <option>Action</option>
                            <option>Thriller</option>
                            <option>Adventure</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>OVERVIEW</label>
                        <input type="text" placeholder="Overview here" />
                    </div>
                    <div className="form-group">
                        <label>RUNTIME</label>
                        <input type="text" placeholder="Runtime here" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button className="secondary clickable" onClick={() => {
                    ModalService.emitResult(false)
                    ModalService.closeModal();
                }}>RESET</button>
                <button className="primary clickable" onClick={() => {
                    // ModalService.emitResult(true) //Will emit updated movie data
                    ModalService.openSuccessModal('The movie has been updated successfully')
                }}>SUBMIT</button>
            </div>
        </div>
    )
}