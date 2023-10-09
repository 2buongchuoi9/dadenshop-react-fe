import classNames from 'classnames/bind';

import style from './MidItem.module.scss';

const cl = classNames.bind(style);

function MidItem({ icon, title, text, count, user }) {
  return (
    <>
      <div className={cl({ user: user, wrapper: !user })}>
        <div className={cl('icon')}>
          {icon}
          {(count || count === 0) && <span className={cl('count')}>{count}</span>}
        </div>
        {user && (
          <div className={cl('top')}>
            <div style={{ fontSize: '13px' }}>{user.ten ? user.ten : 'Đăng nhập'}</div>
          </div>
        )}

        <div className={cl('right')}>
          <div className={cl('title')}>{title}</div>
          <div className={cl('df')}>{text}</div>
        </div>
      </div>
    </>
  );
}
export default MidItem;
