import { Observable, Subject } from "rxjs";
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

    _result;
    _modal = new Subject();

    get modal() {
        return this._modal.asObservable();
    }

    constructor() {

    }

    openAddMovieModal(props) {
        this._resetResult();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.ADD_MOVIE_MODAL), props });
        return this._result.asObservable();
    }

    openUpdateMovieModal(props) {
        this._resetResult();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.UPDATE_MOVIE_MODAL), props });
        return this._result.asObservable();
    }

    openDeleteMovieModal() {
        this._resetResult();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.DELETE_MOVIE_MODAL), props: null });
        return this._result.asObservable();
    }

    openSuccessModal(message) {
        this._resetResult();
        this._modal.next({ isModalVisible: true, ModalComponent: modalMapper.get(MODAL_TYPE.SUCCESS_MODAL), props: { message } });
        return this._result.asObservable();
    }

    closeModal() {
        this._modal.next({ isModalVisible: false, ModalComponent: null })
    }

    emitResult(result) {
        if (this._result) this._result.next(result);
    }

    _resetResult() {
        if (this._result) this._result.complete();
        this._result = new Subject();
    }
}

export const ModalService = new ModalManagementService();
