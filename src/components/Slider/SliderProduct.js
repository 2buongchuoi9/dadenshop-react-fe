import { memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classNames from 'classnames/bind';
import style from './SliderProduct.module.scss';
import { ProductItem } from '../ProductItem';

const cl = classNames.bind(style);

const SliderProduct = ({ row = 1, itemInRow = 5, items, time = 3000 }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: itemInRow,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemInRow,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  let itemsNew = undefined;
  if (row === 2) itemsNew = items.filter((v, i) => i % 2 === 0);

  return (
    <Carousel responsive={responsive} autoPlaySpeed={time} autoPlay infinite className={cl('content')}>
      {row === 2 && items.length >= itemInRow * 2
        ? itemsNew.length > 0 &&
          itemsNew.map((v, i) => (
            <div key={i} className={cl('item')}>
              <div className={cl('_item')}>
                <ProductItem item={items[i]} />
              </div>
              {items[i + 1] && (
                <div className={cl('_item')}>
                  <ProductItem item={items[i + 1]} />
                </div>
              )}
            </div>
          ))
        : items.length > 0 &&
          items.map((v, i) => (
            <div key={i} className={cl('item')}>
              <ProductItem item={items[i]} />
            </div>
          ))}
    </Carousel>
  );
};
export default memo(SliderProduct);
