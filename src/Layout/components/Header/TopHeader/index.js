import classNames from 'classnames/bind';
import { VscLocation } from 'react-icons/vsc';
import { GiHeadphones } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import { TfiUser } from 'react-icons/tfi';
import { BiPowerOff } from 'react-icons/bi';

import style from './TopHeader.module.scss';
import { useSelector } from 'react-redux';

const cl = classNames.bind(style);

function TopItem({ icon, text }) {
  return (
    <div className={cl('top-item')}>
      <div className={cl('icon')}>{icon}</div>
      <div className={cl('text')}>{text}</div>
    </div>
  );
}

function TopHeader() {
  const phone = useSelector((state) => state.info.phoneBuy);
  const address = useSelector((state) => state.info.address);

  return (
    <div className={cl('wrapper', 'top-header')}>
      <div className="container">
        <div className={cl('row')}>
          <div className={cl('left')}>
            <TopItem icon={<GiHeadphones />} text={phone} />
            <TopItem icon={<MdAlternateEmail />} text={'dadentech98@gmail.com'} />
          </div>
          <div className={cl('right')}>
            <TopItem icon={<VscLocation />} text={address} />
            <TopItem icon={<TfiUser />} text={'tài khoản'} />
            <TopItem icon={<BiPowerOff />} text={'login'} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopHeader;
