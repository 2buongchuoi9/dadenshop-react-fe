import classNames from 'classnames/bind';

import style from './CategoryProduct.module.scss';
import { SliderProduct } from '~/components/Slider';
import { memo, useEffect, useState } from 'react';
import service from '~/services';
import Button from '~/components/Button';

const cl = classNames.bind(style);

function CategoryProduct({ brand = false, category = false, user = false }) {
  const [items, setItems] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const fecthAPI = async () => {
      let items = [];
      if (brand) {
        let brands = await service.brand.getBrands();
        brands = brands.filter((v) => v.xuatXu !== '');
        items = await Promise.all(
          brands.map(async (v, i) => {
            const a = await service.product.getProducts({ idBrand: v.id, limit: 10 });
            return {
              tab: v,
              list: a,
            };
          }),
        );
      } else if (category) {
        const categories = await service.category.getCategories();
        console.log('categories');
        console.log(categories);

        items = await Promise.all(
          categories.data.map(async (v, i) => {
            const a = await service.product.getProducts({ idCategory: v.id, limit: 10 });
            return {
              tab: v,
              list: a.data,
            };
          }),
        );
      }
      setItems(items);
    };
    fecthAPI();
  }, []);

  return (
    <div className={cl('cate-product')}>
      <div className={cl('first')}>
        <div className={cl('title')}>
          {brand && 'Thương hiệu'}
          {category && 'loại sản phẩm'}
          {user && 'Người sử dụng'}
        </div>
        <div className={cl('tab')}>
          {items &&
            items.map((v, i) => (
              <Button
                key={i}
                className={cl('btn', { active: i === currentTab })}
                primary
                onClick={() => {
                  setCurrentTab(i);
                }}
              >
                {v.tab.name}
              </Button>
            ))}
          <Button primary>Xem tất cả</Button>
        </div>
      </div>
      {items[currentTab] && items[currentTab].list.length > 0 && (
        <div className={cl('content')}>
          <SliderProduct items={items[currentTab].list} row={2} />
        </div>
      )}
    </div>
  );
}
export default memo(CategoryProduct);
