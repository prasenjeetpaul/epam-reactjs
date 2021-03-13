import React from 'react';
import { ModalService } from '../modal-service';

export const SuccessModal = ({ message }) => (
    <div className="modal-content">
        <div className="modal-action">
            <div className="modal-close-icon clickable" onClick={() => ModalService.closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 311.07733">
                    <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                    <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                </svg>
            </div>
        </div>
        <div className="modal-body">
            <div className="center">
                <svg className="success-icon" xmlns="http://www.w3.org/2000/svg"
                    version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 455.111 455.111">
                    <circle cx="227.556" cy="227.556" r="227.556" />
                    <path d="M351.289,162.133L203.378,324.267c-9.956,11.378-27.022,11.378-36.978,0l-62.578-69.689  c-8.533-9.956-8.533-25.6,1.422-35.556c9.956-8.533,25.6-8.533,35.556,1.422l44.089,49.778l129.422-140.8  c9.956-9.956,25.6-11.378,35.556-1.422C359.822,136.533,359.822,153.6,351.289,162.133z" />
                </svg>
            </div>
            <h1 className="center">CONGRATULATIONS !</h1>
            <span className="center">{message}</span>
        </div>
    </div>
);