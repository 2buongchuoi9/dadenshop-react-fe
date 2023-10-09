import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const cl = classNames.bind(style);

const logoThanhToan = [
  'http://localhost:8081/images/logo/visa-pay.png',
  'http://localhost:8081/images/logo/mc-pay.png',
  'http://localhost:8081/images/logo/jcb-pay.png',
  'http://localhost:8081/images/logo/atm-pay.png',
  'http://localhost:8081/images/logo/moca-pay.png',
  'http://localhost:8081/images/logo/zalo-pay.png',
  'http://localhost:8081/images/logo/vn-pay.png',
  'http://localhost:8081/images/logo/kre-pay.png',
  'http://localhost:8081/images/logo/smart-pay.png',
  'http://localhost:8081/images/logo/fox-pay.png',
  'http://localhost:8081/images/logo/ale-pay.png',
];
const logoNenTang = [
  {
    icon: 'http://localhost:8081/images/logo/youtube-logo.png',
    link: 'https://www.youtube.com/channel/UCsCzQD_DkLpC8xBMXpSCCgA',
  },
  { icon: 'http://localhost:8081/images/logo/facebook-logo.png', link: 'https://www.facebook.com/qd1005' },
  { icon: 'http://localhost:8081/images/logo/instagram-logo.png', link: 'https://www.instagram.com/dungquoc857/' },
  { icon: 'http://localhost:8081/images/logo/tiktok-logo.png', link: 'https://www.tiktok.com/@phuongmoc2801' },
  { icon: 'http://localhost:8081/images/logo/zalo-logo.png', link: 'https://zalo.me/0936631402' },
];
const iconChungNhan = [
  'http://localhost:8081/images/logo/khieu-nai.png',
  'http://localhost:8081/images/logo/bo-cong-thuong.png',
  'http://localhost:8081/images/logo/dich-vu.png',
  'http://localhost:8081/images/logo/dmca.png',
  'http://localhost:8081/images/logo/viet-nam.png',
  'http://localhost:8081/images/logo/tiem-nang.png',
];
const ilChinhSach = [
  'Mua hàng và thanh toán Online',
  'Mua hàng trả góp Online',
  'Chính sách giao hàng',
  'Tra điểm Smember',
  'Xem ưu đãi Smember',
  'Tra thông tin bảo hành',
  'Tra cứu hoá đơn điện tử',
  'Thông tin hoá đơn mua hàng',
  'Trung tâm bảo hành chính hãng',
  'Quy định về việc sao lưu dữ liệu',
];
const ilDichVu = [
  'Khách hàng doanh nghiệp (B2B)',
  'Ưu đãi thanh toán',
  'Quy chế hoạt động',
  'Chính sách Bảo hành',
  'Liên hệ hợp tác kinh doanh',
  'Tuyển dụng',
  'Dịch vụ bảo hành điện thoại',
  'Dịch vụ bảo hành mở rộng',
];

const thongTin = [
  {
    icon: <IoLocationOutline size={18} style={{ marginRight: '10px' }} />,
    text: '345 Tô Ký Quận 12 Thành phố Hồ Chí Minh',
  },
  { icon: <BsTelephone size={17} style={{ marginRight: '10px' }} />, text: '0936631402 - 0924233993' },
  { icon: <AiOutlineMail size={18} style={{ marginRight: '10px' }} />, text: 'dadentech98@gmail.com' },
];

const itemsGoi = [
  { title: 'Gọi mua hàng', phone: '0936631402', time: '7h30 - 22h00' },
  { title: 'Gọi khiếu nại', phone: '0924233993', time: '8h00 - 21h30' },
  { title: 'Gọi bảo hành', phone: '0936631402', time: '8h00 - 21h00' },
];

const UlGoi = memo(({ items }) => {
  return (
    <ul>
      {items.map((v, i) => (
        <li key={i} className={cl('li')}>
          {v.title + ' '}
          <a href={`tel:${v.phone}`} className={cl('a')}>
            <strong style={{ fontSize: '0.85rem' }}>{v.phone}</strong>
          </a>
          {` (${v.time})`}
        </li>
      ))}
    </ul>
  );
});

function Footer() {
  return (
    <footer>
      <div className={cl('top-footer', 'container')}>
        <div className={cl('colum')}>
          <div className={cl('content')}>
            <div className={cl('title')}>Tổng đài hỗ trợ miễn phí</div>
            <UlGoi items={itemsGoi} />
          </div>
          <div className={cl('content')}>
            <div className={cl('title')}>Phương thức thanh toán</div>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
              {logoThanhToan.map((v, i) => (
                <li key={i} style={{ marginRight: '5px' }}>
                  <Link className={cl('a')}>
                    <img src={v} alt="v" width={'50px'} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl('colum')}>
          <div className={cl('content')}>
            <div className={cl('title')}>Thông tin và chính sách</div>
            <ul>
              {ilChinhSach.map((v, i) => (
                <li key={i} className={cl('li')}>
                  <Link className={cl('a')}>{v}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl('colum')}>
          <div className={cl('content')}>
            <div className={cl('title')}>Dịch vụ và thông tin khác</div>
            <ul>
              {ilDichVu.map((v, i) => (
                <li key={i} className={cl('li')}>
                  <Link className={cl('a')}>{v}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl('colum')}>
          <div className={cl('content')}>
            <div className={cl('title')}>Kết nối với DaDenShop</div>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
              {logoNenTang.map((v, i) => (
                <li key={i} style={{ marginRight: '5px' }}>
                  <a href={v.link} target="_blank" rel="noreferrer">
                    <img src={v.icon} alt="v" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={cl('content')}>
            <div className={cl('title')}>Thông tin về DaDenShop</div>
            <ul>
              {thongTin.map((v, i) => (
                <li key={i} className={cl('li')} style={{ marginBottom: '15px', cursor: 'pointer' }}>
                  <span className={cl('a')} style={{ display: 'flex', alignItems: 'center' }}>
                    {v.icon}
                    {v.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cl('content')}>
            <div className={cl('title')}>Chứng nhận</div>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
              {iconChungNhan.map((v, i) => (
                <li key={i} className={cl('liImg')}>
                  <Link className={cl('a')}>
                    <img src={v} alt="v" width={'100%'} height={'30px'} style={{ padding: '3px 5px ' }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={cl('bottom-footer')}
        style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '20px 0', fontSize: '0.9rem' }}
      >
        <div className={cl('container')} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', justifyItems: 'center' }}>COPYRIGHT © 2023</span>
          <Link style={{ color: '#fff', margin: '0 25px' }}>
            <img src="http://localhost:8081/images/dadenshoptrang.png" alt="v" height={'25px'}></img>
          </Link>
          <span>DEVELOPMENT BY ANH DA DEN</span>
        </div>
      </div>
    </footer>
  );
}
export default memo(Footer);
