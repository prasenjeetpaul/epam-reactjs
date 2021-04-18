import React from 'react';
import * as Modal from "../modal-service";
import * as Store from '../../../store/action';
import { render, screen, waitFor } from "@testing-library/react";
import { AddMovieModalComponent, addMovie } from './add-movie-modal';
import { MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES } from '../modal.util';
import userEvent from '@testing-library/user-event'
import axios from 'axios';

jest.mock('axios');


describe('Add Movie Modal', () => {

    beforeEach(() => {
        Modal.ModalService = { closeModal: jest.fn() };
    });

    it('should show all invalid error message when SUBMIT is clicked without filling the form', () => {
        const cb = jest.fn();
        render(<AddMovieModalComponent addMovie={cb} />);
        screen.getByText('SUBMIT').click();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.title)).toBeDefined();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.releaseDate)).toBeDefined();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.posterURL)).toBeDefined();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.genre)).toBeDefined();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.overview)).toBeDefined();
        expect(screen.getByText(MOVIE_DATA_REQUIRED_VALIDATION_ERROR_MESSAGES.runtime)).toBeDefined();
        expect(cb).not.toHaveBeenCalled();
    });

    it('should call modalService.close when closing the modal', async () => {
        const componenet = render(<AddMovieModalComponent />);
        await waitFor(() => userEvent.click(componenet.container.querySelector('.modal-close-icon > svg')));
        expect(Modal.ModalService.closeModal).toHaveBeenCalled();
    });
});


describe('Add Movie', () => {

    beforeEach(() => {
        Modal.ModalService = { openSuccessModal: jest.fn(), openErrorModal: jest.fn() };
        Store.refreshMovieDataAction = jest.fn();
    });

    it('should open error modal when the add api call fails', async () => {
        axios.post = jest.fn(() => new Promise((resolve, reject) => reject()));
        const dispatch = jest.fn();
        await addMovie(dispatch)({});

        expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/movies', {});
        expect(Modal.ModalService.openErrorModal).toHaveBeenCalledWith('Something went wrong. Please try again after some time');
    });

    it('should open success modal when the add api call succeeds', async () => {
        axios.post = jest.fn(() => new Promise((resolve, reject) => resolve()));
        const dispatch = jest.fn();
        await addMovie(dispatch)("Mock Movie Item");

        expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/movies', 'Mock Movie Item');
        expect(Modal.ModalService.openSuccessModal).toHaveBeenCalledWith('The movie has been added to database successfully.');
        expect(Store.refreshMovieDataAction).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalled();
    });
});