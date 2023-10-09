import classNames from 'classnames/bind';
import { BiUserCircle } from 'react-icons/bi';
import { TbLogout } from 'react-icons/tb';
import style from './MidItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction, selectCurrentUser } from '~/app/slice/authSlice';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import WrapperPopper from '~/components/Popper/WrapperPopper';
import { memo, useState } from 'react';

const cl = classNames.bind(style);

function MidAcout() {
  const history = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [show, setShow] = useState(false);
  console.log(show);

  const dispatch = useDispatch();

  const handleClick = () => {
    history('/login');
  };

  const handleToggleClick = () => {
    setShow(!show);
  };

  const handleClickLogout = () => {
    handleToggleClick();
    dispatch(authAction.logout);
  };

  const render = () => {
    return (
      <div className={cl('propper-menu')}>
        <WrapperPopper>
          <ul>
            <li className={cl('li')}>
              <Button to={'/user'} className={cl('btn')} iconLeft={<BiUserCircle />} onClick={handleToggleClick}>
                Tài khoản
              </Button>
            </li>
            <li className={cl('li')}>
              <Button className={cl('btn')} iconLeft={<TbLogout />} onClick={handleClickLogout}>
                Đăng xuất
              </Button>
            </li>
          </ul>
        </WrapperPopper>
      </div>
    );
  };

  return (
    <>
      {!user ? (
        <div className={cl('user')} onClick={handleClick}>
          <div className={cl('icon')}>
            <BiUserCircle size={20} />
          </div>
          <div className={cl('name')}>Đăng nhập</div>
        </div>
      ) : (
        <Tippy content={render()} interactive className={cl('tippy')} visible={show}>
          <div className={cl('user')} onClick={handleToggleClick}>
            <div className={cl('icon')}>
              <BiUserCircle />
            </div>
            <div className={cl('name')}>{user?.email}</div>
          </div>
        </Tippy>
      )}
    </>
  );
}
export default memo(MidAcout);
