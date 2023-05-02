import React from 'react';

import { ReactComponent as FavoriteSVG } from '../../../../assets/favoriteIcon.svg';
import useTranslation from '../../../../hooks/useTranslations';

export default function HomeFavorite() {
  const { t } = useTranslation();

  return (
    <div className="home-favorite">
      <h2 className="home-title">{t.account.selectedProductsTitle}</h2>
      <div className="home-bottom">
        <div className="home-bottom__card">
          <div className="home-bottom__left">
            <FavoriteSVG width="224" height="170" />
          </div>
          <div className="home-bottom__right">
            <h3 className="home-bottom__right-title">{t.account.selectedProductsCardTitle}</h3>
            <p className="home-bottom__right-description">{t.account.selectedProductsDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
