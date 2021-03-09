import React from 'react';
import './modal.scss';
import { ModalService } from './modal-service';


export class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            ModalComponent: null
        }
    }

    componentWillMount() {
        ModalService.modal.subscribe(({ isModalVisible, ModalComponent, props }) => this.setState({ isModalVisible, ModalComponent, props }));
    }

    render() {
        const { isModalVisible, ModalComponent, props } = this.state;
        if (!isModalVisible) {
            document.body.classList.remove('disable-scroll');
            return null;
        }
        document.body.classList.add('disable-scroll');
        return (
            <section className="modal-container">
                {isModalVisible ? <ModalComponent {...props} /> : null}
            </section>
        )
    }
}