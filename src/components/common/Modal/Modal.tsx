import React from 'react';

import './Modal.scss';

import { ReactComponent as CloseModal } from '../../../assets/closeModal.svg';

interface ModalProps {
  onClick?: () => void;
  onClose?: () => void;
  title?: string;
  description?: string;
  button?: string;
}

export default function Modal({ onClick, onClose, title, description, button }: ModalProps) {
  return (
    <div className='modal-backdrop'>
      <div className='modal-wrapper'>
        <div className='modal-window'>
          <div className='modal-content'>
            <div className='modal-close' onClick={onClose}>
              <CloseModal width='20' height='20' />
            </div>
            <div className='modal-top'>
              <h3 className='modal-title'>{title}</h3>
              <div className='modal-description'>{description}</div>
            </div>
            <button onClick={onClick} className='modal-button__save'>
              {button}
            </button>
            <button onClick={onClose} className='modal-button__close'>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
