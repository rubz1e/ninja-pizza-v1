import React, { useState } from 'react';

import './Expander.scss';

import AuthModal from '../../page/AuthModal/AuthModal';

interface ModalProps {
  text: string;
  // link: { pathname: string; search: string };
}

export default function Expander({ text }: ModalProps) {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleLoginClick = () => {
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };

  return (
    <div className='expander'>
      <div className='expander-wrapper'>
        <div className='expander-content'>
          <div className='expander-description'>{text}</div>
          <div className='expander-button'>
            <button onClick={handleLoginClick} className='expander-button__button'>
              Войти
            </button>
            {isShowModal && <AuthModal onClose={handleClose} />}
          </div>
        </div>
      </div>
    </div>
  );
}
