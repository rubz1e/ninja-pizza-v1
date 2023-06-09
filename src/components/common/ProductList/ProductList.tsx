import './ProductList.scss';
import ProductCategory from '../ProductCategoryList/ProductCategoryList';
import { ProductListProps } from '../../../type/productProps';
import useTranslation from '../../../hooks/useTranslations';

export default function ProductList({ id, title, category }: ProductListProps) {
  const { t } = useTranslation();

  return (
    <div className="product-list" id={id}>
      <div className="product-list__top">{title}</div>
      <div className="product-list__wrapper">
        <div className="product-list__content">
          <div className="product-list__temp">
            <ProductCategory getElement={category} numberToShow={8} />
          </div>
        </div>
      </div>
      <div className="product-list__bottom">
        <a href={`/${category}`} className="product-list__button">
          {t.main.button}
        </a>
      </div>
    </div>
  );
}
