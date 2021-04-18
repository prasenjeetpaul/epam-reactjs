import React from 'react';
import * as Modal from "../modal-service";
import { render, screen, waitFor } from "@testing-library/react";
import { SuccessModal } from './success-modal';
import userEvent from '@testing-library/user-event'


describe('Success Movie Modal', () => {

    beforeEach(() => {
        Modal.ModalService = { closeModal: jest.fn() };
    });

    it('should call modalService.close when closing the modal', async () => {
        render(<SuccessModal isSuccess={true} message="Test Message" />);
        await waitFor(() => userEvent.click(screen.getByTestId('close-icon')));
        expect(Modal.ModalService.closeModal).toHaveBeenCalled();
    });

    it('should show `CONGRATULATIONS` on success', () => {
        render(<SuccessModal isSuccess={true} message="Test Message" />);
        expect(screen.getByTestId('header-text').innerHTML).toEqual('CONGRATULATIONS !');
    });

    it('should show `SERVER ERROR` on error', () => {
        render(<SuccessModal isSuccess={false} message="Test Message" />);
        expect(screen.getByTestId('header-text').innerHTML).toEqual('SERVER ERROR !');
    });

    it('should display the message in the modal', () => {
        render(<SuccessModal isSuccess={false} message="Test Message" />);
        expect(screen.getByTestId('message-text').innerHTML).toEqual('Test Message');
    });
});