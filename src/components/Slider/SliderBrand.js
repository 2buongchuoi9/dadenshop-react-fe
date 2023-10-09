import { useState, useEffect, memo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classNames from 'classnames/bind';

import service from '~/services';
import style from './SliderBrand.module.scss';
import { Link } from 'react-router-dom';

const cl = classNames.bind(style);

function SliderBrand({ itemInRow = 4, row = 2, time = 3000 }) {
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

  const [itemBrand, setItemBrand] = useState(null);

  useEffect(() => {
    const fecthAPI = async () => {
      let b = await service.brand.getBrands();
      b = b.filter((v, i) => v.xuatXu !== '');
      setItemBrand(b);
    };
    fecthAPI();
  }, []);

  // console.log(items);

  // Tạo danh sách sản phẩm cặp chẵn lẻ
  const pairedItems = [];
  if (row === 2 && itemBrand)
    for (let i = 0; i < itemBrand.length; i += 2) {
      pairedItems.push([itemBrand[i], itemBrand[i + 1]]);
    }

  return (
    <Carousel responsive={responsive} autoPlay autoPlaySpeed={time}>
      {row === 2
        ? pairedItems.map((pair, i) => (
            <div key={i} className={cl('brand')}>
              {pair[0] && (
                <div className={cl('box')}>
                  <Link to={'/brand'}>
                    <img src={pair[0].icon} alt={pair[0].ten} className={cl('img')} />
                  </Link>
                </div>
              )}
              {pair[1] && (
                <div className={cl('box')}>
                  <Link to={'/brand'}>
                    <img src={pair[1].icon} alt={pair[1].ten} className={cl('img')} />
                  </Link>
                </div>
              )}
            </div>
          ))
        : pairedItems.map((v, i) => (
            <div key={i} className={cl('brand')}>
              <Link to={'/brand'}>
                <img src={v.icon} alt={v.ten} className={cl('img')} />
              </Link>
            </div>
          ))}
    </Carousel>
  );
}
export default memo(SliderBrand);
