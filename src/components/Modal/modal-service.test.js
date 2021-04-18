import { ModalService } from './modal-service';
import { AddMovieModal } from './AddMovieModal';
import { UpdateMovieModal } from './UpdateMovieModal';
import { DeleteMovieModal } from './DeleteMovieModal';
import { SuccessModal } from './SuccessModal';

describe('Modal Service', () => {

    beforeEach(() => {
        ModalService['_modal'] = {
            asObservable: jest.fn(),
            next: jest.fn()
        };
    });

    it('should return the subject as observable on get modal', () => {
        ModalService.modal;
        expect(ModalService['_modal'].asObservable).toHaveBeenCalled();
    });

    it('should open AddMovieModal on openAddMovieModal', () => {
        ModalService.openAddMovieModal();
        expect(ModalService['_modal'].next).toHaveBeenCalledWith({ isModalVisible: true, ModalComponent: AddMovieModal, modalProps: null });
    });

    it('should open UpdateMovieModal on openUpdateMovieModal', () => {
        ModalService.openUpdateMovieModal("MovieItem");
        expect(ModalService['_modal'].next).toHaveBeenCalledWith({ isModalVisible: true, ModalComponent: UpdateMovieModal, modalProps: { movieItem: "MovieItem" } });
    });

    it('should open DeleteMovieModal on openDeleteMovieModal', () => {
        ModalService.openDeleteMovieModal(100);
        expect(ModalService['_modal'].next).toHaveBeenCalledWith({ isModalVisible: true, ModalComponent: DeleteMovieModal, modalProps: { movieID: 100 } });
    });

    it('should open SuccessModal on openSuccessModal', () => {
        ModalService.openSuccessModal('My Message');
        expect(ModalService['_modal'].next).toHaveBeenCalledWith({ isModalVisible: true, ModalComponent: SuccessModal, modalProps: { isSuccess: true, message: 'My Message' } });
    });

    it('should open SuccessModal with error flag on openErrorModal', () => {
        ModalService.openErrorModal('My Message');
        expect(ModalService['_modal'].next).toHaveBeenCalledWith({ isModalVisible: true, ModalComponent: SuccessModal, modalProps: { isSuccess: false, message: 'My Message' } });
    });
});