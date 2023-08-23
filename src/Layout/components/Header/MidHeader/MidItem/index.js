import classNames from 'classnames/bind';

import style from './MidItem.module.scss';

const cl = classNames.bind(style);

function MidItem({ icon, title, text, count }) {
  return (
    <div className={cl('wrapper')}>
      <div className={cl('icon')}>
        {icon}
        {count && <span className={cl('count')}>{count}</span>}
      </div>
      <div className={cl('right')}>
        <div className={cl('title')}>{title}</div>
        <div className={cl('df')}>{text}</div>
      </div>
    </div>
  );
}
export default MidItem;
