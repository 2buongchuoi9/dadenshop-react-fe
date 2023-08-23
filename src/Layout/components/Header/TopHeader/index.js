import classNames from 'classnames/bind';
import { VscLocation } from 'react-icons/vsc';
import { GiHeadphones } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import { TfiUser } from 'react-icons/tfi';
import { BiPowerOff } from 'react-icons/bi';

import style from './TopHeader.module.scss';

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
  return (
    <div className={cl('wrapper', 'top-header')}>
      <div className="container">
        <div className={cl('row')}>
          <div className={cl('left')}>
            <TopItem icon={<GiHeadphones />} text={'0936631402'} />
            <TopItem icon={<MdAlternateEmail />} text={'dadentech98@gmail.com'} />
          </div>
          <div className={cl('right')}>
            <TopItem icon={<VscLocation />} text={'Tầng 82 Landmark81'} />
            <TopItem icon={<TfiUser />} text={'tài khoản'} />
            <TopItem icon={<BiPowerOff />} text={'login'} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopHeader;
