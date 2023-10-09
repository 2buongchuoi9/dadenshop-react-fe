import { useEffect, useState } from 'react';
import { LiaArrowAltCircleUp } from 'react-icons/lia';
import classNames from 'classnames/bind';
import style from './Sticky.module.scss';

const cl = classNames.bind(style);
function Sticky() {
  const [fex, setFex] = useState(false);
  useEffect(() => {
    const scroll = () => {
      setFex(window.scrollY > 200 ? true : false);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  return (
    <div>
      <div>
        <div className={cl('none', { sticky: fex })}>
          <LiaArrowAltCircleUp
            style={{ color: '#fff', cursor: 'pointer', width: '30px', height: '30px' }}
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          />
        </div>
        <a className={cl('zalo')} href="https://zalo.me/0936631402" target="_blank" rel="noreferrer">
          <img src="http://localhost:8081/images/logo/icon-zalo.png" alt="v" width={40} height={40}></img>
        </a>
      </div>
    </div>
  );
}
export default Sticky;
