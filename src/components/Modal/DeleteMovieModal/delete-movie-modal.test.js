import React from 'react';
import * as Modal from "../modal-service";
import * as Store from '../../../store/action';
import { render, screen, waitFor } from "@testing-library/react";
import { DeleteMovieModalComponent, deleteMovie } from './delete-movie-modal';
import userEvent from '@testing-library/user-event'
import axios from 'axios';

jest.mock('axios');

describe('Delete Movie Modal', () => {
    beforeEach(() => {
        Modal.ModalService = { closeModal: jest.fn() };
    });

    it('should call modalService.close when closing the modal', async () => {
        render(<DeleteMovieModalComponent />);
        await waitFor(() => userEvent.click(screen.getByTestId('close-icon')));
        expect(Modal.ModalService.closeModal).toHaveBeenCalled();
    });


    it('should call the delete movie callback with movie id on confirmation', async () => {
        const deleteMovieCB = jest.fn();
        render(<DeleteMovieModalComponent deleteMovie={deleteMovieCB} movieID="1" />);
        await waitFor(() => userEvent.click(screen.getByText('CONFIRM')));
        expect(deleteMovieCB).toHaveBeenCalledWith("1");
    });
});


describe('Delete Movie', () => {

    beforeEach(() => {
        Modal.ModalService = { openSuccessModal: jest.fn(), openErrorModal: jest.fn() };
        Store.refreshMovieDataAction = jest.fn();
        Store.deleteMovieItemAction = jest.fn();
    });

    it('should open error modal when the api call fails', async () => {
        axios.delete = jest.fn(() => new Promise((resolve, reject) => reject()));
        const dispatch = jest.fn();
        await deleteMovie(dispatch)(100);

        expect(axios.delete).toHaveBeenCalledWith('http://localhost:4000/movies/100');
        expect(Modal.ModalService.openErrorModal).toHaveBeenCalledWith('Something went wrong');
    });

    it('should open success modal when the api call succeeds', async () => {
        axios.delete = jest.fn(() => new Promise((resolve, reject) => resolve({ data: true })));
        const dispatch = jest.fn();
        await deleteMovie(dispatch)(100);

        expect(axios.delete).toHaveBeenCalledWith('http://localhost:4000/movies/100');
        expect(Modal.ModalService.openSuccessModal).toHaveBeenCalledWith('The movie has been deleted from the database successfully.');
        expect(Store.refreshMovieDataAction).toHaveBeenCalled();
        expect(Store.deleteMovieItemAction).toHaveBeenCalledWith(100);
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});