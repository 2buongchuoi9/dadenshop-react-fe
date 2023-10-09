import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './HotSale.module.scss';
import SliderProduct from '~/components/Slider/SliderProduct';

const products1 = [
  {
    id: 1,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike Madison Mono',
    img: 'http://localhost:8081/images/sanPham/1.png',
    gia: 1000.0,
    new: false,
    hot: true,
    giaKM: 999.9,
  },
  {
    id: 2,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike cao cấp',
    img: 'http://localhost:8081/images/sanPham/2.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 3,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'thể thao Nike',
    img: 'http://localhost:8081/images/sanPham/3.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 4,
    maLoaiSP: 3,
    maNguoiSD: 2,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'vải Nike',
    img: 'http://localhost:8081/images/sanPham/4.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 5,
    maLoaiSP: 3,
    maNguoiSD: 2,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike Camo Americana',
    img: 'http://localhost:8081/images/sanPham/5.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
];
const products2 = [
  {
    id: 1,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike Madison Mono',
    img: 'http://localhost:8081/images/sanPham/1.png',
    gia: 1000.0,
    new: false,
    hot: true,
    giaKM: 999.9,
  },
  {
    id: 2,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike cao cấp',
    img: 'http://localhost:8081/images/sanPham/2.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 3,
    maLoaiSP: 3,
    maNguoiSD: 1,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'thể thao Nike',
    img: 'http://localhost:8081/images/sanPham/3.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 4,
    maLoaiSP: 3,
    maNguoiSD: 2,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'vải Nike',
    img: 'http://localhost:8081/images/sanPham/4.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
  {
    id: 5,
    maLoaiSP: 3,
    maNguoiSD: 2,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike Camo Americana',
    img: 'http://localhost:8081/images/sanPham/5.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
];
const products3 = [
  {
    id: 5,
    maLoaiSP: 3,
    maNguoiSD: 2,
    soLuong: 250,
    slDaBan: 0,
    maThuongHieu: 5,
    ten: 'Nike Camo Americana',
    img: 'http://localhost:8081/images/sanPham/5.png',
    gia: 1000.0,
    new: false,
    hot: true,
  },
];

const tab = [
  { loai: 'Quần, áo', products: products1 },
  { loai: 'giày', products: products2 },
  { loai: 'Phụ kiện', products: products3 },
];

const tenKM = 'hot sale cuối tuần';
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

  useEffect(() => {
    const ti = setTimeout(() => {
      setTimeSale((t) => t - 1000);
    }, 1000);
    return () => {
      clearTimeout(ti);
    };
  }, [timeSale]);

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
          <img src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Gif_hotsale_cu_i_tu_n_1.gif" alt="cc"></img>
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
