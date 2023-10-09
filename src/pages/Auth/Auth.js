import { Link } from 'react-router-dom';
import { HiOutlineBackspace } from 'react-icons/hi2';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import style from './style.module.scss';

const cl = classNames.bind(style);

function Auth({ isLogin, form }) {
  console.log(isLogin);
  return (
    <>
      <div className={cl('div')}>
        <div className={cl('title')}>
          {!isLogin && <Button to={'/login'} iconLeft={<HiOutlineBackspace size={30} className={cl('icon')} />} />}
          <div className={cl('text', { mg: !isLogin })}>Đăng ký</div>
        </div>
        <img src="http://localhost:8081/images/logo/avt.png" width={150} height={150} alt="v" />
        {form}
        <div
          style={{
            margin: '20px 0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <hr style={{ backgroundColor: '#dbdbdb', height: '1px', width: '100%' }} />
          <p style={{ display: 'flex', color: '#777', whiteSpace: 'nowrap', margin: '0 5px' }}>hoặc đăng nhập bằng</p>
          <hr style={{ backgroundColor: '#dbdbdb', height: '1px', width: '100%' }} />
        </div>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              justifyContent: 'center',
              padding: '14px 0',
            }}
          >
            <img
              src="http://localhost:8081/images/logo/gg-icon.png"
              alt=""
              width={24}
              height={24}
              style={{ height: '24px', marginRight: '10px' }}
            />
            <p>Google</p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '18px',
              justifyContent: 'center',
              padding: '14px 0',
            }}
          >
            <img
              src="http://localhost:8081/images/logo/zalo-icon.png"
              alt=""
              width={24}
              height={24}
              style={{ height: '24px', marginRight: '10px' }}
            />
            <p>Zalo</p>
          </div>
        </div>
        <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '14px', color: '#777', paddingRight: '5px' }}>
            {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
          </p>
          <Link
            style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color_primary)' }}
            to={isLogin ? '/register' : '/login'}
          >
            {isLogin ? 'Đăng ký ngay' : 'Đăng nhập ngay'}
          </Link>
        </div>
      </div>
    </>
  );
}
export default Auth;
