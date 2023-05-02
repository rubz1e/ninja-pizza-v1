import React from 'react';
import { ReactComponent as MakeAOrders } from '../../../../assets/home/makeAorders.svg';
import useTranslation from '../../../../hooks/useTranslations';

export default function HomeOrders() {
  const { t } = useTranslation();

  return (
    <div className="home-orders">
      <h2 className="home-title">{t.account.orderHistoryTitle}</h2>
      <div className="home-bottom">
        <div className="home-bottom__card">
          <div className="home-bottom__left">
            <MakeAOrders width="224" height="170" />
          </div>
          <div className="home-bottom__right">
            <h4 className="home-bottom__right-title">{t.account.orderHistoryCardDescription}</h4>
            <p className="home-bottom__right-description">{t.account.orderHistoryCardDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
