import MenuPopper from '~/components/Popper/MenuPopper';
import classNames from 'classnames/bind';

import style from './Home.module.scss';
import { SliderBrand, SliderIcon, SliderImage } from '~/components/Slider';
import { HotSale } from '../components';
import { iconTitel } from '~/icon';
import { memo, useEffect, useState } from 'react';
import service from '~/services';
import CategoryProduct from '../components/CategoryProduct';
import CTKhuyenMai from '../components/CTKhuyenMai';
import LoadingPage from '~/components/LoadingPage/LoadingPage';

const cl = classNames.bind(style);

function Home() {
  const [ITEM, setITEM] = useState([]);
  useEffect(() => {
    const fechAPI = async () => {
      const a = await service.category.getCategories();
      setITEM(a.data);
    };
    fechAPI();
  }, []);
  return (
    <div className={cl('home-page')}>
      <SliderImage time={3000}>
        {ITEM.length > 0 && (
          <MenuPopper items={ITEM} visible="true" width={200}>
            <div style={{ height: '20px' }}></div>
          </MenuPopper>
        )}
      </SliderImage>
      <div className={cl('container', 'wrapper')}>
        <h2>trang home</h2>
        <div className={cl('o', 'hot-cate')}>
          <h1 className={cl('title')}>Ưu đãi tối nhất</h1>
          <SliderIcon items={iconTitel} className={cl('hot-slider')}></SliderIcon>
        </div>
        <div>
          {/* custom api */}
          <HotSale></HotSale>
        </div>
        <div className={cl('o')}>
          <h1 className={cl('title')}>Nhãn hiệu phổ biến</h1>
          <SliderBrand></SliderBrand>
        </div>
        <div className={cl('o')}>
          <CategoryProduct category></CategoryProduct>
        </div>
        {/* <div className={cl('o')}>
          <CategoryProduct brand></CategoryProduct>
        </div> */}
        <div className={cl('o')}>
          <h1 className={cl('title')}>Ưu đãi thanh toán</h1>
          <div className={cl('khuyenMai')}>
            <CTKhuyenMai></CTKhuyenMai>
          </div>
        </div>
        <div className={cl('o')}>
          <h1 className={cl('title')}>Tin thời trang</h1>
          <div className={cl('khuyenMai')}>
            <CTKhuyenMai></CTKhuyenMai>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Home);
