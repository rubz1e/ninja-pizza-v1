import React from 'react';

import './Modal.scss';
import { Link } from 'react-router-dom';

interface ModalProps {
  onLinkClick: () => void;
  text: string;
  link: { pathname: string; search: string };
}

export default function Modal({ onLinkClick, text, link }: ModalProps) {
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };
  return (
    <div className='expander'>
      <div className='expander-wrapper'>
        <div className='expander-content'>
          <div className='expander-description'>{text}</div>
          <div className='expander-button'>
            <Link to={link} onClick={handleClick} className='expander-button__button'>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
