import { Subject } from "rxjs";
import { AddMovieModal } from "./AddMovieModal";
import { UpdateMovieModal } from "./UpdateMovieModal";
import { DeleteMovieModal } from "./DeleteMovieModal";
import { SuccessModal } from "./SuccessModal";

const MODAL_TYPE = {
    ADD_MOVIE_MODAL: 'ADD_MOVIE_MODAL',
    UPDATE_MOVIE_MODAL: 'UPDATE_MOVIE_MODAL',
    DELETE_MOVIE_MODAL: 'DELETE_MOVIE_MODAL',
    SUCCESS_MODAL: 'SUCCESS_MODAL'
}

const modalMapper = new Map();
modalMapper.set(MODAL_TYPE.ADD_MOVIE_MODAL, AddMovieModal);
modalMapper.set(MODAL_TYPE.UPDATE_MOVIE_MODAL, UpdateMovieModal);
modalMapper.set(MODAL_TYPE.DELETE_MOVIE_MODAL, DeleteMovieModal);
modalMapper.set(MODAL_TYPE.SUCCESS_MODAL, SuccessModal);

class ModalManagementService {

    _modal = new Subject();

    get modal() {
        return this._modal.asObservable();
    }

    openAddMovieModal() {
        this.closeModal();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.ADD_MOVIE_MODAL), modalProps: null });
    }

    openUpdateMovieModal(movieItem) {
        this.closeModal();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.UPDATE_MOVIE_MODAL), modalProps: { movieItem } });
    }

    openDeleteMovieModal(movieID) {
        this.closeModal();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.DELETE_MOVIE_MODAL), modalProps: { movieID } });
    }

    openSuccessModal(message) {
        this.closeModal();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.SUCCESS_MODAL), modalProps: { isSuccess: true, message } });
    }

    openErrorModal(message) {
        this.closeModal();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.SUCCESS_MODAL), modalProps: { isSuccess: false, message } });
    }

    closeModal() {
        this._modal.next({ isModalVisible: false, ModalComponent: null, modalProps: null });
    }
}

export const ModalService = new ModalManagementService();
