import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import { ReactComponent as RoutingError } from '../../../assets/notFound.svg';
import useTranslation from '../../../hooks/useTranslations';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notfound">
      <div className="notfound-wrapper">
        <div className="notfound-content">
          <RoutingError />
          <h2 className="notfound-title">{t.notFound.titleFirst} 😕</h2>
          <h2 className="notfound-title">{t.notFound.titleSecond}</h2>
          <p className="notfound-description">{t.notFound.description} 🚧</p>
          <Link to="/" className="notfound-button">
            {t.notFound.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
