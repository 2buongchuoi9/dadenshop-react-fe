import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './HotSale.module.scss';
import SliderProduct from '~/components/Slider/SliderProduct';
import service from '~/services';

const time = new Date('2023-10-10T06:54:00');

const FormatTime = ({ time }) => {
  const totalSeconds = Math.floor(time / 1000);
  const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, '0');
  const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  return (
    <>
      <span className={cl('timeee')}>{days}</span> <span>:</span> <span className={cl('timeee')}>{hours}</span>{' '}
      <span>:</span> <span className={cl('timeee')}>{minutes}</span> <span>:</span>{' '}
      <span className={cl('timeee')}>{seconds}</span>
    </>
  );
};

const cl = classNames.bind(style);

function SliderHotSale() {
  const [timeSale, setTimeSale] = useState(time - Date.now());
  const [currentTab, setCurrenTab] = useState(0);
  const [km, setKm] = useState(null);

  const [tab, setTab] = useState([
    { loai: 'Quần, áo', products: '' },
    { loai: 'giày', products: '' },
    { loai: 'Phụ kiện', products: '' },
  ]);

  useEffect(() => {
    const ti = setTimeout(() => {
      setTimeSale((t) => t - 1000);
    }, 1000);
    return () => {
      clearTimeout(ti);
    };
  }, [timeSale]);

  useEffect(() => {
    const fechAPI = async () => {
      const b = await service.promotion.getById(1);
      console.log('b', b.data);
      setKm(b.data);

      const a = await service.product.getProducts({ limit: 100, page: 1, promotionId: 1 });
      console.log('a', a.data.list);
      tab[0] = { ...tab[0], products: a.data.list };
      setTab([...tab]);
    };
    fechAPI();
  }, []);

  return (
    <div className={cl('hot-sale')}>
      <div className={cl('box-title')}>
        <div className={cl('tab-menu')}>
          {tab.map((v, i) => (
            <button
              key={i + v.loai}
              className={cl('btn', { active: currentTab === i })}
              onClick={() => setCurrenTab(i)}
            >
              {v.loai}
            </button>
          ))}
        </div>
        <div className={cl('title-img')}>
          <img src={km?.avatar} alt={km?.name}></img>
        </div>
        <div className={cl('countdown')}>
          <p style={{ marginRight: '10px', color: '#fff' }}>kết thúc sau: </p>
          <span className={cl('time')}>
            <FormatTime time={timeSale} />
          </span>
        </div>
      </div>

      <div className={cl('list-products')}>
        <SliderProduct items={tab[currentTab].products} />
      </div>
    </div>
  );
}
export default SliderHotSale;
