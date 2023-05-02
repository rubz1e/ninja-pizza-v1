import React, { useState } from 'react';

import { ReactComponent as GPSHome } from '../../../../assets/home/gpsHome.svg';
import Modal from '../../../common/Modal/Modal';
import useTranslation from '../../../../hooks/useTranslations';

export default function HomeGPS() {
  const { t } = useTranslation();
  const [isShowAddAdress, setIsShowAddAdress] = useState(false);

  const handleClickAddAdress = () => {
    setIsShowAddAdress(true);
  };

  return (
    <div className="home-gps">
      <div className="home-top">
        <h2 className="home-title">{t.account.shippingAddressTitle}</h2>
        <button onClick={handleClickAddAdress} className="home-button__add">
          {t.account.shippingAddressCardButton}
        </button>
        {isShowAddAdress && (
          <Modal
            onClose={() => setIsShowAddAdress(false)}
            title="Адрес доставки"
            description="Эта модальное окно находится в разработке"
            button="Вернуться"
            onClick={() => setIsShowAddAdress(false)}
          />
        )}
      </div>
      <div className="home-bottom">
        <div className="home-bottom__card">
          <div className="home-bottom__left">
            <GPSHome width="224" height="170" />
          </div>
          <div className="home-bottom__right">
            <h3 className="home-bottom__right-title">{t.account.shippingAddressCardTitle}</h3>
            <p className="home-bottom__right-description">{t.account.shippingAddressDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
