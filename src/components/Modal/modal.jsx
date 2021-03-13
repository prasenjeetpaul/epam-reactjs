import React, { useState, useEffect } from 'react';
import './modal.scss';
import { ModalService } from './modal-service';

export const Modal = () => {
    const [modalState, setModalState] = useState({
        isModalVisible: false,
        ModalComponent: null,
        modalProps: null
    });

    useEffect(() => {
        const sub = ModalService.modal.subscribe(modalData => {
            if (modalData.isModalVisible) {
                document.body.classList.add('disable-scroll');
            } else {
                document.body.classList.remove('disable-scroll');
            }
            setModalState(modalData);
        });
        return () => sub.unsubscribe();
    }, []);

    return modalState.isModalVisible && (
        <section className="modal-container">
            <modalState.ModalComponent {...modalState.modalProps} />
        </section>
    );
}